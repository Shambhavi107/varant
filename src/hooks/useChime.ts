'use client';

import { useState, useCallback, useRef } from 'react';

export function useChime() {
    const [isMuted, setIsMuted] = useState(true); // Off by default
    const audioCtxRef = useRef<AudioContext | null>(null);

    const getContext = useCallback(() => {
        if (!audioCtxRef.current) {
            audioCtxRef.current = new AudioContext();
        }
        return audioCtxRef.current;
    }, []);

    const playChime = useCallback(() => {
        if (isMuted) return;

        try {
            const ctx = getContext();
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(440, ctx.currentTime);

            gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + 0.2);
        } catch {
            // Web Audio not available
        }
    }, [isMuted, getContext]);

    const toggleMute = useCallback(() => {
        setIsMuted((prev) => !prev);
    }, []);

    return { playChime, isMuted, toggleMute };
}
