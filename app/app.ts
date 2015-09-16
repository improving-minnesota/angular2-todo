import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
// import {HTTP_BINDINGS} from 'http/http';

import {Home} from './components/home/home';
import {Todo} from './components/todo/todo';
import {Todos} from './services/Todos';

@Component({
  selector: 'app',
  viewBindings: [Todos]
})

@RouteConfig([
  { 
  	path: '/', 
  	component: Home, as: 'home' 
  },
  { 
  	path: '/todo', 
  	component: Todo, as: 'todo' 
  }
])

@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  styleUrls: ['/node_modules/bootstrap/dist/css/bootstrap.min.css'],
  directives: [ROUTER_DIRECTIVES]
})

class App {}

bootstrap(App, [ROUTER_BINDINGS]);
