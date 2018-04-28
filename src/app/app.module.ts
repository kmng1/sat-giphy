import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search.component';
import { DisplayComponent } from './components/display.component';
import {GiphyService} from './giphy.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayComponent
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ GiphyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
