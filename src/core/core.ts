//? You can use these files and folders to structure your project as you like. Don't forget to export your classes, functions, etc.
const { Greeter } = require('greeter-package')

export type GreetNpmType = () => string

export function GreetNpm(): ReturnType<GreetNpmType> {
	return Greeter('NPM')
}
