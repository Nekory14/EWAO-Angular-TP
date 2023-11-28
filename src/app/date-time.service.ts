import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateTimeService {
  private dateTimeSource = new BehaviorSubject<string>(this.getFormattedDateTime());
  currentDateTime = this.dateTimeSource.asObservable();

  constructor() {
    setInterval(() => {
      this.dateTimeSource.next(this.getFormattedDateTime());
    }, 1000);
  }

  private getFormattedDateTime(): string {
    const now = new Date();
    return now.toLocaleString();
  }
}
