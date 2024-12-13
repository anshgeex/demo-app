import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  currentDate = new Date();
  fiscalPeriod: any = { start: new Date(this.currentDate.getFullYear(), 0, 1), end: new Date() }
  
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.fiscalPeriodEvent.subscribe(res =>
      this.fiscalPeriod = res
    )
  }
}
