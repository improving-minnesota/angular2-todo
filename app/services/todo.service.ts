export class TodoService {
  todos:string[] = ["My first thing to do", "My second thing to do"];

  get() : string[] {
    return this.todos;
  }

  add(value: string) : void {
    this.todos.push(value);
  }

  remove(value: string) : void {
  	var index = this.todos.indexOf(value, 0);
  	if (index != undefined) {
  	   this.todos.splice(index, 1);
  	}
  }
}
