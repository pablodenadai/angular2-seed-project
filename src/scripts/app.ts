import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {HeroService} from './hero/hero.service';
import {HeroListComponent} from './hero/hero-list.component';
import {HeroDetailComponent} from './hero/hero-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1 class="display-4">{{ title }}</h1>
      <p class="lead">Light-weight and easy to use seed project for Angular 2 apps.</p>
      <img src="./images/super-fat-heroes.png" width="300px">

      <hr>
      <div class="btn-group">
        <a class="btn btn-primary-outline" [routerLink]="['./Dashboard']">Dashboard</a>
        <a class="btn btn-primary-outline" [routerLink]="['./Heroes']">Heroes</a>
      </div>

      <hr>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
/**
 * @TODO: Review Angular2 router declaration.
 * Currently it's all defined here in this one file and it's far from ideal.
 * We need a more modular and scalable solution instead.
 */
@RouteConfig([
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/heroes', name: 'Heroes', component: HeroListComponent },
  { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent }
])
export class AppComponent {
  /**
   * This is a doc comment for `title`.
   * @example This is a caption.
   * ```ts
   * var world: String = 'world';
   * var hello: String = 'Hello ' + world;
   * console.log(hello);
   * ```
   * @deprecated This is an example of the `deprecated` annotation tag.
   */
  public title = 'Tour of Heroes';
}

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HeroService
]);
