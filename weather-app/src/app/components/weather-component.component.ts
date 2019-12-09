import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.css']
})
export class WeatherComponent implements OnInit {
  cities:Array<string> = ['London', 'Cambridge', 'Manchester']
  weatherArray = [];

  async ngOnInit(){
    // https://openweathermap.org/current

    var key = '194333f5b09188fbda8c4a3bbfea30b2';
    
    for (let city of this.cities){
      let res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key); 
      let weatherObj = await res.json();
      this.weatherArray.push(weatherObj);
    }

    console.log(this.weatherArray);
  }
}
