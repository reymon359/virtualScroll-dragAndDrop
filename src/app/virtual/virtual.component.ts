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
    console.log('items', this.persons);
  }

  numberItems(itemsNumber: number) {
    itemsNumber = (Number(itemsNumber) > 500000) ? 500000 : Number(itemsNumber);
    this.persons = Array(itemsNumber).fill(0);
    console.log('items', this.persons);
  }

  goEnd() {
    this.viewPort.scrollToIndex(this.persons.length);
  }

  goMiddle() {
    this.viewPort.scrollToIndex(this.persons.length / 2);
  }
  goStart() {
    this.viewPort.scrollToIndex(0);
  }

}
