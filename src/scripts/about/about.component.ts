import {Component} from 'angular2/core';

@Component({
	selector: 'about',
	templateUrl: './about.template.html'
})
export class AboutComponent {
	constructor() {
		/**
		 * This snippet shows how third-party libraries ie. Lodash can be consumed
		 * using Typings - the type definition manager.
		 */
		let filtered: Array<number>;
		filtered = _.filter([0, 1, 2, 3], (number: number) => (number % 2 === 0));

		console.log('filtered', filtered);
	}
}
