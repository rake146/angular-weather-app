import { TestBed, async, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherComponent } from './weather-component.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { WeatherChartModule } from '../weather-chart/weather-chart-component.module';
import { DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        NgbPaginationModule,
        NgbPaginationModule.forRoot(),
        FormsModule,
        WeatherChartModule,
        BrowserAnimationsModule
      ],
      declarations: [
        WeatherComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
  })
  
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly filter results to 2 cities', () =>  {
    // mock data from api call
    component.filteredCity = 'Lo';
    component.filteredArray = [{city:'London', temp:20, desc:'Rain'}, {city:'Tokyo', temp:15, desc:'Sun'}, {city:'Los Angeles', temp:25, desc:'Sun'}]

    // update array
    component.changeFilter();

    expect(component.filteredArray.length).toEqual(2);
  });

  it('should correctly paginate to 5 items per page', async () =>  {
    // mock data from api call
    component.filteredArray = [
      {city:'London', temp:20, desc:'Rain'}, 
      {city:'Tokyo', temp:15, desc:'Sun'}, 
      {city:'Los Angeles', temp:25, desc:'Sun'},
      {city:'Cambridge', temp:-5, desc:'Snow'},
      {city:'Honolulu', temp:34, desc:'Sun'},
      {city:'Dubai', temp:22, desc:'Humid'}
    ]
    component.page = 1;
    component.pageSize = 5;

    fixture.detectChanges();

    const listMembers = fixture.debugElement.queryAll(By.css('.table-row'));

    expect(listMembers.length).toEqual(5);
  });
});
