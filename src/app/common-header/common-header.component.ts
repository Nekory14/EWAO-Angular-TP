import { Component, OnInit } from '@angular/core';
import { DateTimeService } from '../date-time.service';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css'],
})
export class CommonHeaderComponent implements OnInit {
  currentDateTime: string = '';

  constructor(private dateTimeService: DateTimeService) {}

  ngOnInit() {
    this.dateTimeService.currentDateTime.subscribe((dateTime) => {
      this.currentDateTime = dateTime;
    });
  }
}
