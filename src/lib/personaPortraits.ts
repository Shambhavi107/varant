import { PersonaId } from '@/types/council';

/** ASCII portraits for persona hover preview on input page */
export const PERSONA_PORTRAITS: Record<PersonaId, string> = {
  skeptic: `
   ▄▄▄▄▄
  █····█
  █····█  वितर्क
  █▄▄▄█
    ▲
  `,
  optimist: `
   ╭───╮
  │ ✦✦✦ │  आशा
   ╰───╯
    ✿
  `,
  pragmatist: `
   ┌───┐
  │ ⚖ │  युक्ति
   └───┘
   ═══
  `,
  'devils-advocate': `
   ◇───◇
  │ ◇◇◇ │  विपक्ष
   ◇───◇
    ◇
  `,
};
