import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern Industrial SaaS Palette
        app: {
          bg: '#F7F8FA',         // Main canvas background
          surface: '#FFFFFF',    // Clean card surface
          subtle: '#F9FAFB',     // Table headers, subtle blocks
          border: '#E5E7EB',     // Standard 1px divider/border
          borderDark: '#D1D5DB', // Focus/hover border
        },
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',        // Main primary SaaS blue
          700: '#1D4ED8',
        },
        text: {
          primary: '#111827',    // Deep slate 900
          secondary: '#4B5563',  // Slate 600
          muted: '#6B7280',      // Slate 500
          subtle: '#9CA3AF',     // Slate 400
        },
        industrial: {
          darkest: '#F7F8FA',    // Mapped for backwards-compatibility
          navy: '#FFFFFF',       // Sidebar / Header surface
          surface: '#FFFFFF',    // Card surface
          border: '#E5E7EB',     // Border lines
          muted: '#6B7280',      // Secondary text
        },
        brand: {
          cyan: '#0284C7',       // Calm precision sky blue (non-neon)
          blue: '#2563EB',       // Modern SaaS Primary Blue
          deep: '#1D4ED8',       // Active/Hover Blue
          light: '#EFF6FF',      // Selected highlight background
        },
        status: {
          normal: '#16A34A',     // Green 600
          warning: '#D97706',    // Amber 600
          highrisk: '#EA580C',   // Orange 600
          critical: '#DC2626',   // Red 600
          offline: '#6B7280',    // Slate 500
        },
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
        'subtle': '0 4px 12px 0 rgba(0, 0, 0, 0.03)',
        'dropdown': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.02)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
