// @if isProd
import {enableProdMode} from 'angular2/core';
enableProdMode();
// @endif

import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app';

bootstrap(AppComponent);
