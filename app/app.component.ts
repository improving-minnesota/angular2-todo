import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
// import {HTTP_BINDINGS} from 'http/http';

import {HomeComponent} from './components/home/home.component';
import {TodoComponent} from './components/todo/todo.component';
import {TodoService} from './services/todo.service';
import {HttpComponent} from './components/http/http.component';

@Component({
  selector: 'app',
  viewBindings: [TodoService]
})

@RouteConfig([
  { 
  	path: '/', 
  	component: HomeComponent, as: 'home' 
  },
  { 
  	path: '/todo', 
  	component: TodoComponent, as: 'todo' 
  },
  {
    path: '/http',
    component: HttpComponent, as: 'http'
  }
])

@View({
  templateUrl: './app.html',
  directives: [ROUTER_DIRECTIVES]
})

class AppComponent {}

bootstrap(AppComponent, [ROUTER_BINDINGS]);
