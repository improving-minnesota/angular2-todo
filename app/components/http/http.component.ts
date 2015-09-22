import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {HTTP_BINDINGS, Http} from 'angular2/http';

@Component({
  selector: 'http',
  bindings: [HTTP_BINDINGS]
})

@View({
  templateUrl: './components/http/http.html',
  directives: [CORE_DIRECTIVES]
})

export class HttpComponent {
	people : Object[];
	http : Http;

	constructor(http:Http) {
		this.http = http;
	}

	performRequest() : void {
		this.http.get('/assets/people.json').toRx().subscribe(res => {
	       this.people = res.json();
	    });
	}
}
