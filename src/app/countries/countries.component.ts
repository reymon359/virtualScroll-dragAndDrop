import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: []
})
export class CountriesComponent implements OnInit {

  countries: any=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`https://restcountries.eu/rest/v2/region/europe`)
    .subscribe(countries => this.countries = countries  );
  }

}