import 'rxjs/add/operator/map';

import {Observable} from 'rxjs';
import {Injectable} from 'angular2/core';
import {Http, Request, Response, RequestMethod, RequestOptions, BaseRequestOptions} from 'angular2/http';

export class RestOptions extends BaseRequestOptions {
	constructor() {
		super();
		this.url = '//jsonplaceholder.typicode.com';
		this.headers.append('Content-Type', 'application/json');
	}
}

@Injectable()
export class RestService {
	constructor(
		private http: Http,
		private restOptions: RestOptions
	) {}

	create(path: string, body: Object): Observable<Response> {
		return this.request(path, RequestMethod.Post, body);
	}

	read(path: string, search?: Object): Observable<Response> {
		return this.request(path, RequestMethod.Get, null, search);
	}

	update(path: string, body: Object): Observable<Response> {
		return this.request(path, RequestMethod.Put, body);
	}

	delete(path: string): Observable<Response> {
		return this.request(path, RequestMethod.Delete);
	}

	private request(path: string, method: RequestMethod, body?: Object, search?: Object): Observable<Response> {
		let options = new RequestOptions(this.restOptions.merge({
			method: method,
			url: this.restOptions.url + path,
			body: JSON.stringify(body),
			search: this.serialize(search)
		}));

		return this.http.request(new Request(options));
	}

	private serialize(obj: Object): string {
		var str = [];

		for (let p in obj) {
			if (obj.hasOwnProperty(p)) {
				str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
			}
		}

		return str.join('&');
	}
}
