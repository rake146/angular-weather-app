import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-chart-component',
  templateUrl: './weather-chart-component.component.html',
  styleUrls: ['./weather-chart-component.component.css']
})
export class WeatherChartComponent implements OnInit {
  @Input() filteredArray;

  multi: any[] = [
    {
      name: 'Temp',
      series: [

      ]
    }
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Temp';
  showYAxisLabel = true;
  yAxisLabel = 'City';
  autoScale = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


  async ngOnInit(){
    this.buildGraph();
  }

  buildGraph(){
    this.multi = [
      {
        name: 'Temp',
        series: [
  
        ]
      }
    ];

    for (let element of this.filteredArray){
      this.multi[0].series.push({name: element.name, value: element.main.temp - 273.15});
    }

    let averageTemp = Math.round(this.filteredArray.reduce((accumulator, currentValue) => accumulator + currentValue.main.temp, 0) / this.filteredArray.length) - 273.15;

    this.multi.push({
      name: 'Average',
      series: [
  
      ]
    });

    for (let element of this.filteredArray){
      this.multi[1].series.push({name: element.name, value: averageTemp});
    }
  }

}
