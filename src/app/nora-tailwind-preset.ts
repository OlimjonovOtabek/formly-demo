import { definePreset } from '@primeuix/themes';
import Nora from '@primeuix/themes/nora';

/**
 * Nora preset, but all key semantic tokens are aligned to your CSS variables
 * from styles.css (:root + .dark).
 */
export const NoraTailwindPreset = definePreset(Nora, {
  semantic: {
    // PrimeNG base uses these a lot (e.g. {transition.duration})
    transition: {
      duration: '150ms',
    },

    // Primary palette used by many components (buttons, toggles, highlights, etc.)
    // (Tailwind blue palette, with your light/dark primaries matching 600/500)
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6', // matches your .dark --primary
      600: '#2563eb', // matches your :root --primary
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },

    // Destructive palette (Tailwind red-ish); your variables drive actual usage below.
    danger: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626', // matches your :root --destructive
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },

    /**
     * IMPORTANT:
     * Many built-in presets define a bunch of tokens under colorScheme.
     * If you override them outside colorScheme, your overrides can be ignored.
     * So we override key tokens *inside* colorScheme for both light + dark.:contentReference[oaicite:2]{index=2}
     */
    colorScheme: {
      light: {
        primitive: {
          // “surface.*” is referenced all over the component token files
          // (e.g. {surface.0}, {surface.200}, {surface.900}, etc.).
          surface: {
            0: 'var(--card)',         // panels/cards
            50: 'var(--background)',  // app background
            100: 'var(--muted)',      // subtle sections
            200: 'var(--border)',     // borders/dividers baseline
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: 'var(--foreground)',
            950: '#020617',
          },
        },

        semantic: {
          // Global text tokens
          text: {
            color: 'var(--foreground)',
            mutedColor: 'var(--muted-foreground)',
          },

          // Generic “content” tokens (used as background/border defaults in many components)
          content: {
            background: 'var(--card)',
            hoverBackground: 'var(--muted)',
            color: 'var(--foreground)',
            hoverColor: 'var(--foreground)',
            borderColor: 'var(--border)',
            borderRadius: '0.75rem',
          },

          // Often used for inline selection states, table row hover, chips, etc.
          highlight: {
            background: 'color-mix(in srgb, var(--primary) 14%, transparent)',
            color: 'var(--foreground)',
          },

          // Focus ring
          focusRing: {
            width: '2px',
            style: 'solid',
            color: 'var(--ring)',
            offset: '2px',
            shadow: '0 0 0 2px color-mix(in srgb, var(--ring) 25%, transparent)',
          },

          // Primary “context” (many tokens reference {primary.color} / {primary.contrast.color})
          primary: {
            color: 'var(--primary)',
            contrastColor: 'var(--primary-foreground)',
            hoverColor: '#1d4ed8',
            activeColor: '#1e40af',
          },

          // Destructive “context”
          danger: {
            color: 'var(--destructive)',
            contrastColor: 'var(--destructive-foreground)',
            hoverColor: '#b91c1c',
            activeColor: '#991b1b',
          },

          // Optional: overlay mask (dialogs, sidebars)
          mask: {
            background: 'rgba(15, 23, 42, 0.45)',
          },
        },
      },

      dark: {
        primitive: {
          surface: {
            0: 'var(--card)',
            50: 'var(--background)',
            100: 'color-mix(in srgb, var(--card) 70%, black)',
            200: 'var(--muted)',
            300: 'var(--border)',
            400: 'color-mix(in srgb, var(--border) 70%, white)',
            500: 'color-mix(in srgb, var(--muted-foreground) 55%, black)',
            600: 'color-mix(in srgb, var(--muted-foreground) 75%, black)',
            700: 'var(--muted-foreground)',
            800: 'color-mix(in srgb, var(--foreground) 80%, black)',
            900: 'var(--foreground)',
            950: 'color-mix(in srgb, var(--foreground) 92%, white)',
          },
        },

        semantic: {
          text: {
            color: 'var(--foreground)',
            mutedColor: 'var(--muted-foreground)',
          },

          content: {
            background: 'var(--card)',
            hoverBackground: 'color-mix(in srgb, var(--muted) 70%, black)',
            color: 'var(--foreground)',
            hoverColor: 'var(--foreground)',
            borderColor: 'var(--border)',
            borderRadius: '0.75rem',
          },

          highlight: {
            background: 'color-mix(in srgb, var(--primary) 22%, transparent)',
            color: 'var(--foreground)',
          },

          focusRing: {
            width: '2px',
            style: 'solid',
            color: 'var(--ring)',
            offset: '2px',
            shadow: '0 0 0 2px color-mix(in srgb, var(--ring) 30%, transparent)',
          },

          primary: {
            color: 'var(--primary)',
            contrastColor: 'var(--primary-foreground)',
            hoverColor: '#60a5fa',
            activeColor: '#93c5fd',
          },

          danger: {
            color: 'var(--destructive)',
            contrastColor: 'var(--destructive-foreground)',
            hoverColor: '#f87171',
            activeColor: '#fca5a5',
          },

          mask: {
            background: 'rgba(0, 0, 0, 0.55)',
          },
        },
      },
    },
  },
});

export default NoraTailwindPreset;
