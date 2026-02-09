/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors (Institutional Navy/Blue)
        'oti-navy': '#003366',
        'oti-blue': '#004080',
        'oti-accent': '#0066CC',

        // Neutrals
        'oti-gray-50': '#F8F9FA',
        'oti-gray-100': '#F1F3F5',
        'oti-gray-200': '#E9ECEF',
        'oti-gray-300': '#DEE2E6',
        'oti-gray-400': '#CED4DA',
        'oti-gray-500': '#ADB5BD',
        'oti-gray-600': '#6C757D',
        'oti-gray-700': '#495057',
        'oti-gray-800': '#343A40',
        'oti-gray-900': '#212529',

        // Text Colors
        'oti-text-primary': '#2C3E50',
        'oti-text-secondary': '#6C757D',

        // Category Accent Colors
        'oti-fintech': '#0066CC',
        'oti-legal': '#7C3AED',
        'oti-energy': '#10B981',
        'oti-health': '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-1': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-2': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h1': ['42px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['20px', { lineHeight: '1.5', fontWeight: '600' }],
        'lead': ['20px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'elevated': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}

