import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';

import {AppComponent} from './app';

// @if isProd
enableProdMode();
// @endif

bootstrap(AppComponent);
