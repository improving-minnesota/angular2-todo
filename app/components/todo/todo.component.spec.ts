import {
  AsyncTestCompleter,
  TestComponentBuilder,
  describe,
  expect,
  inject,
  it
} from 'angular2/test_lib';
import {Component, View} from 'angular2/angular2';
import {DOM} from 'angular2/src/core/dom/dom_adapter';
import {TodoComponent} from './todo.component';
import {TodoService} from '../../services/todo.service';

export function main() {
  describe('Todo component', () => {
    it('should work',
      inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
        tcb.overrideTemplate(TestComponent, '<div><todo></todo></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            rootTC.detectChanges();

            let todoInstance = rootTC.debugElement.componentViewChildren[0].componentInstance;
            let aboutDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;
            var todosListLen = function () {
              return todoInstance.todoService.get().length;
            }

            expect(todosListLen()).toEqual(2);
            expect(DOM.querySelectorAll(aboutDOMEl, 'li').length).toEqual(todosListLen());

            todoInstance.add({value: 'Test'});
            rootTC.detectChanges();

            expect(todosListLen()).toEqual(3);
            expect(DOM.querySelectorAll(aboutDOMEl, 'li').length).toEqual(todosListLen());

            expect(DOM.querySelectorAll(aboutDOMEl, 'li')[2].textContent).toContain('Test');

            async.done();
          });
      }));
  });
};

@Component({selector: 'test-cmp', bindings: [TodoService]})
@View({directives: [TodoComponent]})
class TestComponent {}
