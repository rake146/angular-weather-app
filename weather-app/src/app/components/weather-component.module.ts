import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  exports: [
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    NgbPaginationModule,
    NgbPaginationModule.forRoot(),
    FormsModule
  ],
  providers: []
})
export class WeatherModule { }
