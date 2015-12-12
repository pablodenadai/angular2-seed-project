import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {IHero} from '../hero/hero.interface';
import {HeroService} from '../hero/hero.service';

@Component({
  selector: 'my-dashboard',
  template: `
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
    	<div *ngFor="#hero of heroes | slice:0:4" class="col-1-4" (click)="gotoDetail(hero)">
    		<div class="module hero">
    			<h4>{{hero.name}}</h4>
    		</div>
    	</div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  public heroes: IHero[] = [];

  constructor(
    private _heroService: HeroService,
    private _router: Router) {}

  ngOnInit() {
    this._heroService
      .getHeroes()
      .then((heroes: IHero[]) => this.heroes = heroes);
  }

  gotoDetail(hero: IHero) {
    this._router.navigate(['HeroDetail', {
      id: hero.id
    }]);
  }
}
