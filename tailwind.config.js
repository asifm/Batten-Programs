// todo: updated to Tailwind 3.0
const { customColors } = require('./src/data/colors');
const production = !process.env.ROLLUP_WATCH;

module.exports = {
	purge: {
		enabled: production,
		content: [
			'./src/**/*.svelte', //
			'./src/**/*.html',
			'./src/**/*.js',
			'./src/**/*.ts',
		],
		options: {
			// use property 'safelist' for class names that should not be purged;
		},
	},
	theme: {
		extend: {
			colors: customColors,
			fontFamily: {
				body: ['georgia', 'serif'],
				sans: ['franklin-gothic-urw', 'sans-serif'],
			},
			margin: {
				96: '24rem',
				128: '32rem',
			},
		},
	},
	// todo: Remove variants after updating to tailwind 3.0
	variants: {
		boxShadow: ['group-focus', 'hover'],
	},
};
