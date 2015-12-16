import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
	selector: 'my-heroes',
	template: `
		<h2>All Heroes</h2>

		<div class="list-group">
			<a *ngFor="#hero of heroes"
				class="list-group-item"
				[class.active]="hero === selectedHero"
				(click)="onSelect(hero)">
				{{ hero.name }}

				<div *ngIf="hero === selectedHero">
					<h2>{{ selectedHero.name | uppercase }} is my favourite hero!</h2>
					<button class="btn btn-info-outline" (click)="gotoDetail(selectedHero)">View Details</button>
				</div>
			</a>
		</div>
	`
})
export class HeroListComponent implements OnInit {
	public heroes: Hero[] = [];
	public selectedHero: Hero;

	constructor(
		private heroService: HeroService,
		private router: Router) {}

	getHeroes() {
		this.selectedHero = undefined;
		this.heroes = [];

		this.heroService
			.getHeroes()
			.then((heroes: Hero[]) => this.heroes = heroes);
	}

	gotoDetail(hero: Hero) {
		this.router.navigate(['HeroDetail', {
			id: hero.id
		}]);
	}

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
}
