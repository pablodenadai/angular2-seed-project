import {Injectable} from 'angular2/core';

import {IHero} from './hero.interface';
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
			.then((heroes: IHero[]) => heroes.filter((h: IHero) => h.id === id)[0]);
	}
}
