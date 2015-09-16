import {Todos} from './Todos';

export function main() {
  describe('Todos Service', () => {
    var todos;

    beforeEach(() => {
      todos = new Todos
    });

    it('should return the list of todos', () => {
      var todosList = todos.get();
      expect(todosList).toEqual(jasmine.any(Array));
    });

    it('should add a todo', () => {
      todos.add("todo");
      var todosList = todos.get(); 
      expect(todosList.length).toBe(3);
    });

    it('should remove a todo', () => {
      todos.remove("todo");
      var todosList = todos.get();
      expect(todosList.length).toBe(1);
    });
  });
}
