import {Directive, ElementRef} from 'angular2/core';

/**
 * Basic directive sample.
 * For more info see official docs:
 * https://angular.io/docs/ts/latest/api/core/Directive-var.html
 */
@Directive({
	selector: '[logElement]' // using [ ] means selecting attributes
})
export class LogElement {
	constructor(element: ElementRef) {
		console.log('directive [logElement]', element);
	}
}
