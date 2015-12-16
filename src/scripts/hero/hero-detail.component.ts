import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
	selector: 'my-hero-detail',
	template: `
		<div *ngIf="hero">
			<h3>Hero: {{ hero.name }}</h3>

			<form>
				<fieldset class="form-group">
					<label for="inputId">ID</label>
					<input [(ngModel)]="hero.id" type="text" class="form-control" id="inputId" disabled>
				</fieldset>
				<fieldset class="form-group">
					<label for="inputName">Name</label>
					<input [(ngModel)]="hero.name" type="text" class="form-control" id="inputName">
				</fieldset>
			</form>

			<button class="btn btn-success-outline" (click)="goBack()">Back</button>
		</div>
	`,
	inputs: ['hero']
})
export class HeroDetailComponent implements OnInit {
	public hero: Hero;

	constructor(
		private heroService: HeroService,
		private routeParams: RouteParams) {
	}

	ngOnInit() {
		let id: number = +this.routeParams.get('id');

		this.getHero(id);
	}

	getHero(id: number) {
		this.heroService
			.getHero(id)
			.then((hero: Hero) => this.hero = hero);
	}

	goBack() {
		window.history.back();
	}
}
