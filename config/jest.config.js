module.exports = {
	setupFiles: ['jest.setup.js'],
	testPathIgnorePatterns: [
		'<rootDir>/.next/',
		'<rootDir>/node_modules/'
	],
	setupFiles: [
		'<rootDir>/config/jest.shim.js',
		'<rootDir>/config/jest.setup.js'
	],
	moduleFileExtensions: [
		'js',
		'jsx'
	],
	'moduleNameMapper': {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/config/mocks/fileMock.js',
		'\\.(css|scss|less)$': '<rootDir>/config/mocks/styleMock.js'
	}
}