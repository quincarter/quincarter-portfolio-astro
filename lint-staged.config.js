module.exports = {
	'*.{js,jsx,ts,tsx,mjs,cjs,json,css}': [
		'biome check --write --no-errors-on-unmatched',
	],
	'**/*.ts?(x)': () => 'npm run build-types',
};
