/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FBFBF9', // Warm editorial light surface
          light: '#FFFFFF',   // Pure white card
          card: '#FFFFFF',    // Crisp white card
          subtle: '#F4F4F0',  // Stone panel surface
          muted: '#ECECE7',   // Inset background
        },
        ink: {
          DEFAULT: '#141619', // Crisp charcoal typography
          secondary: '#33383F', // Editorial body text
          muted: '#686E77',   // Technical captions & micro-copy
          faint: '#9EA4AC',   // Watermark labels
        },
        cypress: {
          DEFAULT: '#1B4332', // Deep Forest Cypress primary accent
          hover: '#132F23',
          subtle: '#EBF0EC',
          border: '#BFD1C6',
        },
        forest: {
          DEFAULT: '#1B4332', // Alias for cypress
          hover: '#132F23',
          subtle: '#EBF0EC',
          border: '#BFD1C6',
        },
        ochre: {
          DEFAULT: '#C97A3E', // Subtle Ochre secondary accent
          hover: '#AD632D',
          subtle: '#FBF3EB',
          border: '#E8D4C4',
        },
        terracotta: {
          DEFAULT: '#C97A3E', // Alias for ochre
          hover: '#AD632D',
          subtle: '#FBF3EB',
          border: '#E8D4C4',
        },
        divider: {
          DEFAULT: '#E4E4E0', // Subdued hairline divider
          subtle: '#EFEFEA',
          strong: '#D0D0CA',
        },
        border: {
          DEFAULT: '#E4E4E0',
          subtle: '#EFEFEA',
          strong: '#D0D0CA',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"Fira Code"', 'JetBrains Mono', 'Menlo', 'monospace'],
      },
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(20, 20, 18, 0.04), 0 1px 2px rgba(20, 20, 18, 0.02)',
        'elevated': '0 6px 24px -4px rgba(20, 20, 18, 0.06), 0 2px 6px -1px rgba(20, 20, 18, 0.03)',
        'monograph': '0 0 0 1px #DDD9CF, 0 8px 30px -4px rgba(20, 20, 18, 0.05)',
      }
    },
  },
  plugins: [],
}
