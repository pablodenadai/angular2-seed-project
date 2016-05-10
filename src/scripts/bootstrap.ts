// @if isProd
import {enableProdMode} from '@angular/core';
enableProdMode();
// @endif

import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app';

bootstrap(AppComponent);
