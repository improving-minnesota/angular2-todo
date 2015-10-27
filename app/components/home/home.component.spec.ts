import {
  AsyncTestCompleter,
  TestComponentBuilder,
  describe,
  expect,
  inject,
  it,
} from 'angular2/test_lib';
import {Component, View} from 'angular2/angular2';
import {DOM} from 'angular2/src/core/dom/dom_adapter';
import {HomeComponent} from './home.component';

export function main() {
  describe('Home component', () => {
    it('should work',
      inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async) => {
        tcb.overrideTemplate(TestComponent, '<div><home></home></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            let homeDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;

            expect(DOM.querySelectorAll(homeDOMEl, 'h1')[0].textContent).toEqual('Howdy!');

            async.done();
          });
      }));
  });
}

@Component({selector: 'test-cmp'})
@View({directives: [HomeComponent]})
class TestComponent {}
