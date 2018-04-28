import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import {GiphyService} from '../giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  @Output() onSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  processForm(form: NgForm) {
    console.log('processing form: ', form.value.searchText);
    this.onSearch.next(form.value.searchText);
    form.reset();
  }


}
