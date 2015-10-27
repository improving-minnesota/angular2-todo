import {Component, bind, bootstrap, ViewEncapsulation} from 'angular2/angular2';
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  ROUTER_BINDINGS,
  ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';

import {HomeComponent} from './components/home/home.component';
import {TodoComponent} from './components/todo/todo.component';
import {TodoService} from './services/todo.service';
import {HttpComponent} from './components/http/http.component';

@Component({
  selector: 'app',
  viewBindings: [TodoService],
  templateUrl: './app.html',
  styleUrls: ['../node_modules/bootstrap/dist/css/bootstrap.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/home', component: HomeComponent, as: 'Home' },
  { path: '/todo', component: TodoComponent, as: 'Todo' },
  { path: '/http', component: HttpComponent, as: 'Http' }
])
class App {}

bootstrap(App, [
  ROUTER_BINDINGS,
  bind(ROUTER_PRIMARY_COMPONENT).toValue(App)
]);

