import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {IHero} from './hero.interface';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
    	<h2>{{hero.name}} details!</h2>
    	<div>
    		<label>id: </label>{{hero.id}}</div>
    	<div>
    		<label>name: </label>
    		<input [(ngModel)]="hero.name" placeholder="name"/>
    	</div>
    	<button (click)="goBack()">Back</button>
    </div>
  `,
  inputs: ['hero']
})
export class HeroDetailComponent implements OnInit {
  public hero: IHero;

  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    if (!this.hero) {
      let id = +this._routeParams.get('id');

      this._heroService
        .getHero(id)
        .then((hero: IHero) => this.hero = hero);
    }
  }

  goBack() {
    window.history.back();
  }
}
