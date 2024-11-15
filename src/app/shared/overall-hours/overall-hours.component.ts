import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-overall-hours',
  standalone: true,
  imports: [CommonModule, MatIconModule, AgCharts],
  templateUrl: './overall-hours.component.html',
  styleUrl: './overall-hours.component.scss'
})
export class OverallHoursComponent {
  public chartOptions!: AgChartOptions;
  public barChartOptions!: AgChartOptions;
  constructor() {
    this.chartOptions = {
      data: [
        { label: 'Worked Hours', value: 600 },
        { label: 'Tracked Hours', value: 400 },
      ],
      series: [
        {
          type: 'donut',
          angleKey: 'value',
          calloutLabelKey: 'label',
          innerRadiusRatio: 0.5,
          outerRadiusRatio: 1,
          innerLabels: [
            {
              text: 'Total Hours',
              fontWeight: 'bold',
            },
            {
              text: '1000',
              fontSize: 48,
              color: 'green',
            },
          ],
          fills: ['#091836', '#03bcf3'],
          innerCircle: {
            fill: 'var(--chart-blue)',
          },
        },
      ],
      background: {
        fill: '#fbfbfb'
      }
    };

    this.barChartOptions = {
      title: {
        text: 'Monthly Hours',
      },
      data: [
        { month: 'January', cumulativeHours: 40, totalHours: 80 },
        { month: 'February', cumulativeHours: 90, totalHours: 120 },
        { month: 'March', cumulativeHours: 130, totalHours: 160 },
        { month: 'April', cumulativeHours: 170, totalHours: 20 },
      ],
      series: [
        {
          type: 'bar',
          xKey: 'month',
          yKey: 'cumulativeHours',
          yName: 'Cumulative Hours',
          fill: '#091836'
        },
        {
          type: 'bar',
          xKey: 'month',
          yKey: 'totalHours',
          yName: 'Total Hours',
          fill: '#03bcf3'
        },
      ],
      background: {
        fill: '#fbfbfb',
      },
    };
  }
}
