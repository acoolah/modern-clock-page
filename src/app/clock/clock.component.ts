import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  date: Date = new Date();

  ngOnInit(): void {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime(): void {
    this.date = new Date();
  }
}
