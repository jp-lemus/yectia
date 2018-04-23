import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styles: []
})
export class SectionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();

  }

}
