/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#027373',
				'secondary': '#038C7F',
				'auxiliar1': '#A9D9D0',
				'auxiliar2': '#F2E7DC'
			}
		},
	},
	plugins: [],
}
