import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GithubApiService } from './githubapi.service';
import { LazyLoadModule } from '@greg-md/ng-lazy-load';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from '@angular/material';
import { MdSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MdSnackBarModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    LazyLoadModule,
    NgxPaginationModule
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
