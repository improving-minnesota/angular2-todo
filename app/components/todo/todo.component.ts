import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'todo',
  templateUrl: './components/todo/todo.html',
  directives: [CORE_DIRECTIVES]
})

export class TodoComponent {
  constructor(public todoService: TodoService) {}

  add(newtodo) : boolean {
    this.todoService.add(newtodo.value);
    newtodo.value = null;
    return false;
  }

  remove(name: string) : void {
  	this.todoService.remove(name);
  }
}
