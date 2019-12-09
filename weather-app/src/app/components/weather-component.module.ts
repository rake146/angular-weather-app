import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather-component.component';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  exports: [
    WeatherComponent
  ],
  providers: []
})
export class WeatherModule { }
