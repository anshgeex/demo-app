import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  standalone: true,
  selector: 'app-project-hours',
  templateUrl: './project-hours.component.html',
  styleUrl: './project-hours.component.scss',
  imports: [MatIconModule, AgCharts]
})
export class ProjectHoursComponent {
  barChartOptions: AgChartOptions;
  constructor() {
    this.barChartOptions = {
      data: [
        { organization: 'Apple', hours: 800 },
        { organization: 'Walmart', hours: 600 },
        { organization: 'Microsoft', hours: 900 },
        { organization: 'Project 1', hours: 300 },
        { organization: 'Project 2', hours: 400 },
        { organization: 'Project 3', hours: 200 },
        { organization: 'Project 4', hours: 500 },
        { organization: 'Project 5', hours: 700 },
        { organization: 'Project 6', hours: 100 },
        { organization: 'Project 7', hours: 50 },
      ],
      series: [{
        type: 'bar',
        xKey: 'organization',
        yKey: 'hours',
      }],
      background: { fill: '#fbfbfb', },
    };
  }

}

const fillColor = (param: any): any => {
  console.log(fillColor);
  const colors: any = {
    'Apple': '#FF5733',
    'Walmart': '#33FF57',
    'Microsoft': '#3357FF',
    'Project 1': '#F1C40F',
    'Project 2': '#8E44AD',
    'Project 3': '#E67E22',
    'Project 4': '#2ECC71',
    'Project 5': '#3498DB',
    'Project 6': '#9B59B6',
    'Project 7': '#34495E',
  };
  return colors[param];
}
