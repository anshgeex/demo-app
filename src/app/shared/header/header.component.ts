import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule, MatDateRangePicker } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDateRangePicker,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  emailCount: number = 5; // Example count for emails
  notificationCount: number = 3; // Example count for notifications
  currentDate = new Date();
  fiscalPeriod: any = { start: new Date(this.currentDate.getFullYear(), 0, 1), end: new Date() }

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.fiscalPeriodChange();
  }

  fiscalPeriodChange() {
    this.commonService.fiscalPeriodEvent.emit(this.fiscalPeriod);
  }

}