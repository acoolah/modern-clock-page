import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  date: Date = new Date();

  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  days: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  time: string = '';
  day: number = 0;
  month: number = 0;
  today: string = '';
  ampm: string = this.date.getHours() > 12 ? 'PM' : 'AM';

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime(): void {
    this.date = new Date();

    this.time = `${this.date.getHours() % 12 || 12}:${(
      '0' + this.date.getMinutes()
    ).slice(-2)}:${('0' + this.date.getSeconds()).slice(-2)}`;
    this.day = this.date.getDay() - 1;
    this.month = this.date.getMonth();
    this.today = `${this.days[this.day]}, ${
      this.months[this.month]
    } ${this.date.getDate()}`;
  }
}
