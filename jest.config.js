module.exports = {
	moduleFileExtensions: ['js', 'jsx', 'json'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	testRegex: '(/__tests__/.*|(\\.|/)test)\\.(js|jsx)?$',
	testPathIgnorePatterns: [
		'/node_modules/',
		'/dist/',
	],
	transformIgnorePatterns: [
		'/node_modules/',
	],
	unmockedModulePathPatterns: [
		'<rootDir>/node_modules/react/',
		'<rootDir>/node_modules/enzyme/',
	],
	collectCoverageFrom: [
		'**/*.{js,jsx}',
		'!**/node_modules/**',
		'!**/coverage/**',
		'!**/jest.config.js',
	],
	setupFiles: [
		'./test/jestSetup.js',
	],
	testURL: 'http://localhost',
}
