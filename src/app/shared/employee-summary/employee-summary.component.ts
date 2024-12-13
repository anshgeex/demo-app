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
  gridOptions = {
    defaultColDef: {
      resizable: true,
      sortable: true,
      filter: true,
    },
    animateRows: true,
    pagination: true,
    paginationPageSize: 10,
  };

  columnDefs: ColDef[] = [
    {
      headerName: 'Name',
      field: 'name',
      cellRenderer: (params: any) => `<img src="assets/user-avatar.png" style="width: 30px; height: 30px; border-radius: 50%;" /> ${params.value}`,
    },
    { headerName: 'Timesheet Expected', field: 'timesheetExpected' },
    { headerName: 'Unconfirmed Timesheet', field: 'unconfirmedTimesheet' },
    { headerName: 'Confirmed Timesheet', field: 'confirmedTimesheet' },
    { headerName: 'Missing Timesheets', field: 'missingTimesheet',
      cellRenderer: (params: any) => `${params.value} <a href="#" style="color: var(--graph-darker-blue); font-weight: 500">Notify User</a>`,
     },
  ];

  rowData = [
    {
      name: 'John Doe',
      avatar: 'https://example.com/avatar1.png',
      timesheetExpected: 85,
      unconfirmedTimesheet: 40,
      confirmedTimesheet: 38,
      missingTimesheet: 36,
    },
    {
      name: 'Jane Smith',
      avatar: 'https://example.com/avatar2.png',
      timesheetExpected: 85,
      unconfirmedTimesheet: 40,
      confirmedTimesheet: 38,
      missingTimesheet: 36,
    },
    {
      name: 'Alice Johnson',
      avatar: 'https://example.com/avatar3.png',
      timesheetExpected: 85,
      unconfirmedTimesheet: 40,
      confirmedTimesheet: 38,
      missingTimesheet: 36,
    },
    {
      name: 'Alice Johnson',
      avatar: 'https://example.com/avatar3.png',
      timesheetExpected: 85,
      unconfirmedTimesheet: 40,
      confirmedTimesheet: 38,
      missingTimesheet: 36,
    }
  ];

  onGridReady(params: any) {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();
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
