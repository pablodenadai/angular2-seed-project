import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from '../hero/hero';
import {HeroService} from '../hero/hero.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
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

		return this.heroes;
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
