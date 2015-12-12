import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {IHero} from './hero.interface';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
  selector: 'my-heroes',
  template: `
    <div>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="#hero of heroes"
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <div *ngIf="selectedHero">
        <h2>{{selectedHero.name | uppercase}} is my hero</h2>
        <button (click)="gotoDetail()">View Details</button>
      </div>
    </div>
  `,
  directives: [HeroDetailComponent]
})
export class HeroListComponent implements OnInit {
  public heroes: IHero[];
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

  gotoDetail() {
    this._router.navigate(['HeroDetail', {
      id: this.selectedHero.id
    }]);
  }

  ngOnInit() {
    this.heroes = this.getHeroes();
  }

  onSelect(hero: IHero) { this.selectedHero = hero; }
}
