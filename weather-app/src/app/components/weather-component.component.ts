import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css']
})
export class WeatherComponent implements OnInit {
  cities:Array<string> = ['London', 'Cambridge', 'Manchester', 'Paris', 'Dubai', 'Tokyo', 'Los Angeles', 'Sydney', 'Honolulu', 'Miami', 'Ely']
  weatherArray = [];
  filter = new FormControl('');
  page = 4;
  filteredArray = [];
  paginatedArray = [];
  filteredCity = '';
  Math;
  sorted = {sorted: false, column: 'city', orderAscending: true };
  pageSize = 5;

  async ngOnInit(){
    this.Math = Math;

    // https://openweathermap.org/current

    var key = '194333f5b09188fbda8c4a3bbfea30b2';
    
    for (let city of this.cities){
      let res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key); 
      let weatherObj = await res.json();
      this.weatherArray.push(weatherObj);
    }

    this.filteredArray = this.weatherArray;
  }

  changeFilter(){
    if (this.filteredCity == ''){
      this.filteredArray = this.weatherArray;
    } else {
      this.filteredArray = this.filteredArray.filter((weatherObj) => weatherObj.name.toLowerCase().includes(this.filteredCity.toLowerCase()));
    }
  }

  onSort(event){
    if (event.target.innerHTML == 'City'){
      this.sorted = {sorted: true, column: 'city', orderAscending: !this.sorted.orderAscending};

      if (this.sorted.orderAscending == true){
        this.filteredArray = this.filteredArray.sort((a, b) => a.name > b.name ? 1 : -1);
      } else {
        this.filteredArray = this.filteredArray.sort((a, b) => a.name < b.name ? 1 : -1);
      }
      
    }

    if (event.target.innerHTML == 'Temp'){
      this.sorted = {sorted: true, column: 'temp', orderAscending: !this.sorted.orderAscending};

      if (this.sorted.orderAscending == true){
        this.filteredArray = this.filteredArray.sort((a, b) => a.main.temp - b.main.temp);
      } else {
        this.filteredArray = this.filteredArray.sort((a, b) => b.main.temp - a.main.temp);
      }
      console.log("TEMP", this.filteredArray);
    } 

  }

}
