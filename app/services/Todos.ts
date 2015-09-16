export class Todos {
  todos:string[] = ["My first thing to do", "My second thing to do"];

  get() {
    return this.todos;
  }

  add(value: string) {
    this.todos.push(value);
  }

  remove(value: string) {
  	var index = this.todos.indexOf(value, 0);
	if (index != undefined) {
	   this.todos.splice(index, 1);
	}
  }
}
