import {Injectable} from 'angular2/core';

import {Hero} from './hero';
import {HEROES} from './hero.mock';

@Injectable()
export class HeroService {
	getHeroes() {
		return Promise
			.resolve(HEROES);
	}

	getHero(id: number) {
		return Promise
			.resolve(HEROES)
			.then((heroes: Hero[]) => heroes.filter((h: Hero) => h.id === id)[0]);
	}
}
