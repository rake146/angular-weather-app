import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherChartComponent } from '../weather-chart/weather-chart-component.component';

type ISorting = {
  sorted: boolean,
  column: string,
  orderAscending: boolean
}

type IWeather = {
  city: string,
  temp: number,
  desc: string
}

@Component({
  selector: 'weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css']
})
export class WeatherComponent implements OnInit {
  @ViewChild(WeatherChartComponent) child:WeatherChartComponent;
  
  cities:Array<string> = ['London', 'Cambridge', 'Manchester', 'Paris', 'Dubai', 'Tokyo', 'Los Angeles', 'Sydney', 'Honolulu', 'Miami', 'Ely']
  sorted:ISorting = { sorted: false, column: 'city', orderAscending: true };
  weatherArray = [];
  filteredArray:Array<IWeather> = [];
  page = 1;
  pageSize = 5;
  filteredCity = '';
  Math;

  ngOnInit(){
    this.Math = Math;
    this.retrieveData();
  }

  async retrieveData(){
    // https://openweathermap.org/current
    var key = '194333f5b09188fbda8c4a3bbfea30b2';
        
    for (let city of this.cities){
      let res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key); 
      let weatherObj = await res.json();
      this.weatherArray.push({city: weatherObj.name, temp: weatherObj.main.temp, desc: weatherObj.weather[0].description});
    }

    this.filteredArray = this.weatherArray;
  }

  changeFilter(){
    if (this.filteredCity == ''){
      this.filteredArray = this.weatherArray;
    } else {
      this.filteredArray = this.weatherArray.filter((weatherObj) => weatherObj.city.toLowerCase().includes(this.filteredCity.toLowerCase()));
    }
  }

  onSort(event){
    if (event.target.innerHTML == 'City'){
      this.sorted = {sorted: true, column: 'city', orderAscending: !this.sorted.orderAscending};

      if (this.sorted.orderAscending == true){
        this.filteredArray = this.filteredArray.sort((a, b) => a.city > b.city ? 1 : -1);
      } else {
        this.filteredArray = this.filteredArray.sort((a, b) => a.city < b.city ? 1 : -1);
      }
      
    }

    if (event.target.innerHTML == 'Temp'){
      this.sorted = {sorted: true, column: 'temp', orderAscending: !this.sorted.orderAscending};

      if (this.sorted.orderAscending == true){
        this.filteredArray = this.filteredArray.sort((a, b) => a.temp - b.temp);
      } else {
        this.filteredArray = this.filteredArray.sort((a, b) => b.temp - a.temp);
      }
    } 

    this.child.buildGraph();
  }
}
