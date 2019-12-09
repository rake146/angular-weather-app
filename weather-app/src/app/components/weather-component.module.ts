import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather-component.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  exports: [
    WeatherComponent
  ],
  imports: [
    BrowserModule 
  ],
  providers: []
})
export class WeatherModule { }
