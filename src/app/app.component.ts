import { Component } from '@angular/core';
import { GithubApiService } from './githubapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Enter a keyword and search a github repository';
  results: Array<Object>;
  res_count: number;
  error: any;
  page: number = 1;

  resetData():void {
  	this.results = [];
  	this.error = undefined;
  	this.res_count = undefined;
  }

  constructor(private _githubApiService: GithubApiService) { }

  search(keyword: string) {
  	this.resetData();

    this._githubApiService.searchRep(keyword).subscribe(
    	(data) => this.results = data.items,
    	(err) => this.error = err,
    	() => this.res_count = this.results.length
    );
  }
}