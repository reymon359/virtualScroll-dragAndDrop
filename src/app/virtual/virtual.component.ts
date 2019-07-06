import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';


@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styles: []
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, { read: false, static: false }) viewPort: CdkVirtualScrollViewport;

  persons = Array(500).fill(0);

  constructor() { }

  ngOnInit() {
    console.log(this.persons);
  }

  goEnd() {
    this.viewPort.scrollToIndex(this.persons.length);
  }
  goStart() {
    this.viewPort.scrollToIndex(0);
  }

}
