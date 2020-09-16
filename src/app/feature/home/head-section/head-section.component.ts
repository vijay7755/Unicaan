import { Component, OnInit } from '@angular/core';
import {SuggestionCircle} from './suggestion-circle.model';

@Component({
  selector: 'app-head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss']
})
export class HeadSectionComponent implements OnInit {
tags = ['Recommended', 'tag1', 'tag1', 'tag1', 'tag1', 'tag1', 'tag1', 'tag1', 'tag1', 'tag1' ];
private suggestionCircles: SuggestionCircle[] = [
  new SuggestionCircle('./../../../../assets/home/1.jpg','xzy college','Request'),
  new SuggestionCircle('./../../../../assets/home/2.jpg','abc company','Join'),
  new SuggestionCircle('./../../../../assets/home/3.jpg','cinema club','Request'),
  new SuggestionCircle('./../../../../assets/home/4.jpg','sports club','Request'),
  new SuggestionCircle('./../../../../assets/home/5.jpg','nature club','Join')
];
  constructor() { }

  ngOnInit() {
  }

}
