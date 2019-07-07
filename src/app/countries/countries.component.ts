import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: []
})
export class CountriesComponent implements OnInit {

  countries: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(){ 
this.getCountries();
  }
  getCountries(continent = 'europe') {
    this.http.get(`https://restcountries.eu/rest/v2/region/${continent}`)
      .subscribe(countries => this.countries = this.getRandom(countries, 10));
      // setTimeout(() => {
      //   console.log(this.countries);
      // }, 1000);
  }
  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.countries, event.previousIndex, event.currentIndex);

  }

  getRandom(arr, n) {
    const result = new Array(n);
    let len = arr.length;
    const taken = new Array(len);
    if (n > len) {
      throw new RangeError('getRandom: more elements taken than available');
    }
    while (n--) {
      const x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
}
