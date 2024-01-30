/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      keyframes: {
        'open-clip': {
          '0%': { 
            width: '0',
            height: '0',
            top: '3rem',
            right: '3rem',
            'clip-path': 'circle(0 at center)',
          },
          '100%': { 
            width: '500vmax',
            height: '500vmax',
            top: 'calc(-250vmax + 3rem)',
            right: 'calc(-250vmax + 3rem)',
            'clip-path': 'circle(100% at center)',
          },
        },
      },
      animation: {
        clip: 'open-clip 1.5s ease-in',
      },
      colors: {
        accent: '#a9b665',
        background: '#282828',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      }
    },
	},
	plugins: [],
}
