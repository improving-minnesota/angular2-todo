import {Component, ViewEncapsulation} from 'angular2/angular2';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app',
  templateUrl: './components/app/app.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomeComponent, as: 'Home' }
])
export class AppCmp {}
