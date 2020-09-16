import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
searchInputFocus = false;
  constructor() { }

  ngOnInit() {
  }
onFocus() {
  this.searchInputFocus = true;
}
onBlur() {
  this.searchInputFocus = false;
}
}
