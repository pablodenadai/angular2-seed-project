import {it, describe, expect, inject, beforeEachProviders} from 'angular2/testing';

import {HeroService} from 'base/build/js/hero/hero.service';
import {HEROES} from 'base/build/js/hero/hero.mock';

describe('hero service', () => {
	beforeEachProviders(() => [HeroService]);

	describe('getHeroes()', function() {
		it('should be defined', inject([HeroService], (service) => {
			expect(service.getHeroes).toBeDefined();
		}));

		it('should be a function', inject([HeroService], (service) => {
			expect(service.getHeroes).toEqual(jasmine.any(Function));
		}));

		it('should return all heroes when called without an arg', inject([HeroService], (service) => {
			service.getHeroes().then((heroes) => expect(heroes).toBe(HEROES));
		}));
	});

	describe('getHero()', function() {
		it('should be defined', inject([HeroService], (service) => {
			expect(service.getHero).toBeDefined();
		}));

		it('should be a function', inject([HeroService], (service) => {
			expect(service.getHero).toEqual(jasmine.any(Function));
		}));

		it('should return `undefined` when called with `null`', inject([HeroService], (service) => {
			service.getHero(null).then((hero) => expect(hero).toBe(undefined));
		}));

		it('should return `undefined` when called with `undefined`', inject([HeroService], (service) => {
			service.getHero(undefined).then((hero) => expect(hero).toBe(undefined));
		}));

		it('should return `Andromeda` when called with ID 1', inject([HeroService], (service) => {
			service.getHero(1).then((hero) => {
				expect(hero.id).toBe(1);
				expect(hero.name).toBe('Andromeda');
			});
		}));

		it('should return `Storm` when called with ID 3', inject([HeroService], (service) => {
			service.getHero(3).then((hero) => {
				expect(hero.id).toBe(3);
				expect(hero.name).toBe('Storm');
			});
		}));
	});
});
