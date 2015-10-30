import {Component, CORE_DIRECTIVES} from 'angular2/core';

import {TodoService} from '../../services/todo.service';
//import {MdButton, MdAnchor} from 'angular2_material/src/components/button/button';


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
