import {Component, Input, OnInit} from '@angular/core';
import {Giphy} from '../giphy.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() list: Giphy[] = [];

  constructor() { }

  ngOnInit() {
  }

}
