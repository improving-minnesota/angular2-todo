import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {HomeComponent} from '../home/home.component';
import {TodoComponent} from '../todo/todo.component';
import {TodoService} from '../../services/todo.service';
import {HttpComponent} from '../http/http.component';

@Component({
  selector: 'app',
  viewProviders: [TodoService],
  templateUrl: './components/app/app.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomeComponent, as: 'Home' },
  { path: '/todo', component: TodoComponent, as: 'Todo' },
  { path: '/http', component: HttpComponent, as: 'Http' }
])
export class AppCmp {}
