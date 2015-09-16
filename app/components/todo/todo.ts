import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

import {Todos} from '../../services/Todos';

@Component({
  selector: 'todo'
})

@View({
  templateUrl: './components/todo/todo.html',
  directives: [CORE_DIRECTIVES]
})

export class Todo {
  constructor(public list: Todos) {
  }
  
  add(newtodo) {
    this.list.add(newtodo.value);
    newtodo.value = '';
  }

  remove(name: string) {
  	this.list.remove(name);
  }
}
