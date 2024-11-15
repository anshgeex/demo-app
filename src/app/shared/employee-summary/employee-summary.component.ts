import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-employee-summary',
  standalone: true,
  imports: [MatIconModule, AgGridAngular, MatFormFieldModule, MatInputModule],
  templateUrl: './employee-summary.component.html',
  styleUrl: './employee-summary.component.scss'
})
export class EmployeeSummaryComponent {
  private gridApi!: GridApi;

  columnDefs: ColDef[] = [
    {
      headerName: 'Name',
      field: 'name',
      cellRenderer: (params: any) => `<img src="assets/user-avatar.png" style="width: 30px; height: 30px; border-radius: 50%;" /> ${params.value}`,
      sortable: true
    },
    { headerName: 'Tracking Score', field: 'trackingScore', sortable: true },
    { headerName: 'Expected Hours', field: 'expectedHours', sortable: true },
    { headerName: 'Worked Hours', field: 'workedHours', sortable: true },
    { headerName: 'Tracked Hours', field: 'trackedHours', sortable: true },
    { headerName: 'New', field: 'new', sortable: true },
    { headerName: 'Fiber', field: 'fiber', sortable: true },
    { headerName: 'FD Test', field: 'fdTest', sortable: true },
    { headerName: 'SR & ED Hour', field: 'srEdHour', sortable: true }
  ];

  rowData = [
    {
      name: 'John Doe',
      avatar: 'https://example.com/avatar1.png',
      trackingScore: 85,
      expectedHours: 40,
      workedHours: 38,
      trackedHours: 36,
      new: true,
      fiber: 'Type A',
      fdTest: 'Passed',
      srEdHour: 5
    },
    {
      name: 'Jane Smith',
      avatar: 'https://example.com/avatar2.png',
      trackingScore: 90,
      expectedHours: 40,
      workedHours: 40,
      trackedHours: 40,
      new: false,
      fiber: 'Type B',
      fdTest: 'Passed',
      srEdHour: 8
    },
    {
      name: 'Alice Johnson',
      avatar: 'https://example.com/avatar3.png',
      trackingScore: 75,
      expectedHours: 40,
      workedHours: 35,
      trackedHours: 30,
      new: true,
      fiber: 'Type C',
      fdTest: 'Failed',
      srEdHour: 4
    },
    {
      name: 'Alice Johnson',
      avatar: 'https://example.com/avatar3.png',
      trackingScore: 75,
      expectedHours: 40,
      workedHours: 35,
      trackedHours: 30,
      new: true,
      fiber: 'Type C',
      fdTest: 'Failed',
      srEdHour: 4
    }
  ];

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  onSearch(event: any) {
    this.gridApi.setFilterModel(event.target.value)
  }

  onExport() {
    this.gridApi.exportDataAsCsv();
  }

  filter() {
    /* To implement later */
  }
}
