import {Component, View, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
// import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {TodoComponent} from './todo/todo.component';

@Component({
	selector: 'app'
})
@View({
	directives: [TodoComponent],
	template: `
		<div>
			<h1>{{ title }}</h1>
			<todo></todo>
		</div>
	`
})
export class AppComponent {
	/**
	 * This is a doc comment for `title`.
	 * @example This is a caption.
	 * ```ts
	 * var world: String = 'world';
	 * var hello: String = 'Hello ' + world;
	 * console.log(hello);
	 * ```
	 * @deprecated This is an example of the `deprecated` annotation tag.
	 */
	public title = 'Angular 2 Seed';
}

// @if prod
enableProdMode();
// @endif

bootstrap(AppComponent, []);
