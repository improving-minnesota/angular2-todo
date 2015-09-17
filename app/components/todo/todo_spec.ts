import {
  AsyncTestCompleter,
  TestComponentBuilder,
  By,
  beforeEach,
  ddescribe,
  describe,
  el,
  expect,
  iit,
  inject,
  it,
  xit,
} from 'angular2/test';
import {Component, View} from 'angular2/angular2';
import {DOM} from 'angular2/src/core/dom/dom_adapter';
import {Todo} from './todo';
import {Todos} from '../../services/Todos';

export function main() {
  describe('Todo component', () => {
    it('should work',
      inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
        tcb.overrideTemplate(TestComponent, '<div><todo></todo></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            rootTC.detectChanges();

            var todoInstance = rootTC.componentViewChildren[0].componentInstance;
            var aboutDOMEl = rootTC.componentViewChildren[0].nativeElement;
            var todosListLen = function () {
              return todoInstance.list.todos.length;
            }

            expect(todoInstance.list).toEqual(jasmine.any(Todos));
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

@Component({selector: 'test-cmp', bindings: [Todos]})
@View({directives: [Todo]})
class TestComponent {}
