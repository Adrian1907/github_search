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
  error: any;

  constructor(private _githubApiService: GithubApiService) { }

  search(keyword: string) {
  	this.results = [];
  	this.error = false;

    this._githubApiService.searchRep(keyword).subscribe(
    	(data) => this.results = data.items,
    	(err) => this.error = err
    );
  }
}