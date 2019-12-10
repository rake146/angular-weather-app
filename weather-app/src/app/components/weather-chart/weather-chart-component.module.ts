import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherChartComponent } from './weather-chart-component.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    WeatherChartComponent
  ],
  exports: [
    WeatherChartComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule
  ],
  providers: []
})
export class WeatherChartModule { }
