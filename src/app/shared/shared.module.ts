import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetSummaryComponent } from './timesheet-summary/timesheet-summary.component';
import { OverallHoursComponent } from './overall-hours/overall-hours.component';
import { ProjectHoursComponent } from './project-hours/project-hours.component';
import { EmployeeSummaryComponent } from './employee-summary/employee-summary.component';
import { SrEdSummaryComponent } from './sr-ed-summary/sr-ed-summary.component';

const components = [
  CommonModule,
  TimesheetSummaryComponent,
  OverallHoursComponent,
  ProjectHoursComponent,
  EmployeeSummaryComponent,
  SrEdSummaryComponent
]
@NgModule({
  imports: components,
  exports: components
})
export class SharedModule { }

