import { it, describe, expect, inject, beforeEachProviders } from 'angular2/testing';

import { HeroDetailComponent } from 'base/build/js/hero/hero-detail.component';

describe('hero-detail component', () => {
  let component = new HeroDetailComponent();

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  describe('ngOnInit()', () => {
    let component = new HeroDetailComponent();

    it('should be defined', () => {
      expect(component.ngOnInit).toBeDefined();
    });

    it('should be a function', () => {
			expect(component.ngOnInit).toEqual(jasmine.any(Function));
		});

    xit('should invoke `getHero`', () => {
      spyOn(component, 'getHero');
      component.ngOnInit();
      expect(component.getHero).toHaveBeenCalled();
		});
  });
});
