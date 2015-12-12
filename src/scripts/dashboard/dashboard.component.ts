import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {IHero} from '../hero/hero.interface';
import {HeroService} from '../hero/hero.service';

@Component({
  selector: 'my-dashboard',
  template: `
    <h2>Top Heroes</h2>

    <div class="list-group">
      <a *ngFor="#hero of heroes | slice:0:4"
        class="list-group-item"
        [class.active]="hero === selectedHero"
        (click)="onSelect(hero)">
        {{ hero.name }}

        <div *ngIf="hero === selectedHero">
          <h2>{{ selectedHero.name | uppercase }} is a top hero!</h2>
          <button class="btn btn-info-outline" (click)="gotoDetail(selectedHero)">View Details</button>
        </div>
      </a>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  public heroes: IHero[] = [];
  public selectedHero: IHero;

  constructor(
    private _heroService: HeroService,
    private _router: Router) {}

  getHeroes() {
      this.selectedHero = undefined;
      this.heroes = [];

      this._heroService
        .getHeroes()
        .then((heroes: IHero[]) => this.heroes = heroes);

      return this.heroes;
    }

  gotoDetail(hero: IHero) {
    this._router.navigate(['HeroDetail', {
      id: hero.id
    }]);
  }

  ngOnInit() {
    this.heroes = this.getHeroes();
  }

  onSelect(hero: IHero) {
    this.selectedHero = hero;
  }
}
