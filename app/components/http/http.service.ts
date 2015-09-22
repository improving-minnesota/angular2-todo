import {HTTP_BINDINGS, Http} from 'angular2/http';

export class HttpService {
	http : Http;

	constructor(http: Http) {
		this.http = http;
	}

	performRequest() {
		return this.http.get('/assets/people.json').toRx().subscribe(res => {
	       return res.json();
	    });
	}
}