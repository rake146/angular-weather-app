import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
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
    FormsModule,
    NgxChartsModule
  ],
  providers: []
})
export class WeatherChartModule { }
