import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Enter a keyword and search a github repository';
  results: Array<Object>;

  constructor(private _myserviceService: MyserviceService) { }

  search(keyword: string) {
    this._myserviceService.searchRep(keyword).subscribe(
    	(data) => this.results = data.items
    );
  }
}
