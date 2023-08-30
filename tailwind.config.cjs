/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			backgroundImage: {

				//dev page
				'dev': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(to top, rgba(34, 34, 34, 1) 10%, rgba(34, 34, 34, 0) 40%), url('/assets/server/adm-bg.jpg')",
		
				//server assets
				'server': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(0deg, rgba(34, 34, 34, 1) 12%, rgba(34, 34, 34, 0) 40%), url('/assets/server/server-bg.png')",
				'tab-logo': "url('/assets/server/tab-logo.png')",
		
		
		
			  },   
			colors: {
			'navbar': '#0A0A0A',
			'body': '#111111',
			'card': '#00000051',
			'player': '#9e9e9e41',
		  },
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
