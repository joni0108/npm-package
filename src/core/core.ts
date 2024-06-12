//? You can use these files and folders to structure your project as you like. Don't forget to export your classes, functions, etc.
import { Greeter } from "greeter-package";
import type { GreetNpmType } from "../types";

export function GreetNpm(): ReturnType<GreetNpmType> {
	return Greeter("NPM");
}
