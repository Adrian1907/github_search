import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { Observable } from 'rxjs/Observable';
// import { AppComponent } from './app.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/observable/throw';

@Injectable()
export class MyserviceService {

   	constructor (private _http: Http) {}

    private apiUrl: string = 'https://api.github.com/search/repositories?q=';

    searchRep(keyword: string) {
        return this._http.get(this.apiUrl + keyword)
		       .map(
		       		(response: Response) => response.json()
		       );
		       // ).do(res => console.log(res.items[1].description));
    }
}