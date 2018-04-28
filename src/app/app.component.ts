import { Component } from '@angular/core';
import {GiphyService, Giphy} from './giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  giphys: Giphy[] = [];

  constructor(private giphySvc: GiphyService) { }

  performSearch(searchText: string) {
    console.log('>> in AppComponent: ', searchText);
    this.giphySvc.searchGiphy(searchText)
      .then(result => {
        console.log('from giphy: ', result)
        this.giphys = result;
      })
      .catch(error => {
        console.error(error);
      })
  }
}
