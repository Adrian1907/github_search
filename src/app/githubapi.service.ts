import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubApiService {

   	constructor (private _http: Http,
   		private snackbar: MdSnackBar) { }

	notify(error: any) {
		this.snackbar.open(`Error: ${ error}`, 'Ok', {
			duration: 5000
		});
	}

    private apiUrl: string = 'https://api.github.com/search/repositories?q=';

    searchRep(keyword: string) {
        return this._http.get(this.apiUrl + keyword)
	    	.map(
	    		res => res.json()
	    		)
	    	.catch(
	    		(e) => {
		    		this.notify(`${ e.status } ${ e.statusText }`);
			        return Observable.throw(
			        	new Error(`${ e.status } ${ e.statusText }`)
			        );
		      	});
    }
}