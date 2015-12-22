import {Pipe} from 'angular2/core';

/**
 * Truncate a string to the given length and append suffix.
 * @param	{number} [length=20] Text max length.
 * @param {string} [suffix=''] Appended to the end of the string if truncted.
 * @example
 * ```html
 * <p>{{ 'Hello world' | truncate:5:'...' }}</p>
 * ```
 * Formats to: 'Hello...'
 */
@Pipe({name: 'truncate'})
export class TruncatePipe {
	transform(value: string, args: string[]): any {
		let length = parseInt(args[0] || '20', 10),
			suffix = args[1] || '';

		if (value.length <= length) {
			return value;
		}

		return value.substring(0, length) + suffix;
	}
}
