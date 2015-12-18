import {it, describe, expect, inject, beforeEachProviders} from 'angular2/testing';

import {HeroService} from '../../../src/scripts/hero/hero.service';
import {HEROES} from '../../../src/scripts/hero/hero.mock';

describe('hero service', () => {
	beforeEachProviders(() => [HeroService]);

	describe('getHeroes()', () => {
		it('should be defined', inject([HeroService], (service: HeroService) => {
			expect(service.getHeroes).toBeDefined();
		}));

		it('should be a function', inject([HeroService], (service: HeroService) => {
			expect(service.getHeroes).toEqual(jasmine.any(Function));
		}));

		it('should return all heroes when called without an arg', inject([HeroService], (service: HeroService) => {
			service.getHeroes().then((heroes) => expect(heroes).toBe(HEROES));
		}));
	});

	describe('getHero()', () => {
		it('should be defined', inject([HeroService], (service: HeroService) => {
			expect(service.getHero).toBeDefined();
		}));

		it('should be a function', inject([HeroService], (service: HeroService) => {
			expect(service.getHero).toEqual(jasmine.any(Function));
		}));

		it('should return `undefined` when called with `null`', inject([HeroService], (service: HeroService) => {
			service.getHero(null).then((hero) => expect(hero).toBe(undefined));
		}));

		it('should return `undefined` when called with `undefined`', inject([HeroService], (service: HeroService) => {
			service.getHero(undefined).then((hero) => expect(hero).toBe(undefined));
		}));

		it('should return `Andromeda` when called with ID 1', inject([HeroService], (service: HeroService) => {
			service.getHero(1).then((hero) => {
				expect(hero.id).toBe(1);
				expect(hero.name).toBe('Andromeda');
			});
		}));

		it('should return `Storm` when called with ID 3', inject([HeroService], (service: HeroService) => {
			service.getHero(3).then((hero) => {
				expect(hero.id).toBe(3);
				expect(hero.name).toBe('Storm');
			});
		}));
	});
});
