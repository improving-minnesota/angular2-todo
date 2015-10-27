import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {HTTP_BINDINGS, Http} from 'angular2/http';
import {Person} from './person.interface';

@Component({
  selector: 'http',
  bindings: [HTTP_BINDINGS]
})

@View({
  templateUrl: './components/http/http.html',
  directives: [CORE_DIRECTIVES]
})

export class HttpComponent {
	people : Person[];
	http : Http;

	constructor(http:Http) {
		this.http = http;
	}

	performRequest() : void {
		this.http.get('/assets/people.json').subscribe(res => {
	       this.people = res.json();
	    });
	}
}
