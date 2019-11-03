const colorPalette = {
	red: 'red',
	blue: 'blue',
	white: '#FFFFFF',
	darkGray: '#495057',
	lightGrayishBlue: '#ced4da',
	shark: '#212529',
	azureRadiance: '#1574f5',
	paleSky: '#6c757d',
	steelGray: '#1e1e2f',
	manatee: '#8c909a',
	cornflowerBlue: '#7571f9',
	orangePeel: '#ff9800',
	silver: '#c7c7c7',
	alto: '#e0e0e0',
	ebonyClay: '#2a2c40',
	flushOrange: '#ff8000',
	geyser: '#cdd4e0',
	mirage: '#1c273c'
}

const themeColors = {
	primary: colorPalette.azureRadiance,
	brandColor: colorPalette.flushOrange
}

export default {
	...colorPalette,
	...themeColors
}
