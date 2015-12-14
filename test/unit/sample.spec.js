import { it, describe, expect, inject, beforeEachProviders } from 'angular2/testing';

import { HeroService } from 'base/build/js/hero/hero.service';

describe('user service', () => {
	beforeEachProviders(() => [HeroService])

	it('should have `getHero` method', inject([HeroService], (service) => {
		expect(service.getHero).toBeDefined();
	}));
});
