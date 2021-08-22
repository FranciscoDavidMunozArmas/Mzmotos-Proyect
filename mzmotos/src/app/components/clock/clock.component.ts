import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  hour:string = "";
  minutes:string = "";
  seconds:string = "";
  dayTime:string = "";
  date:string = "";
  month:string = "";
  year:string = "";

  constructor() {
      setInterval(() => this.setTime(), 1000);
  }

  ngOnInit(): void {
    this.setTime();
  }

  setTime(){
    let date = new Date();
    this.hour = (date.getHours() < 10)? "0" + date.getHours().toString():date.getHours().toString();
    this.minutes = (date.getMinutes() < 10)? "0" + date.getMinutes().toString():date.getMinutes().toString();
    this.seconds = (date.getSeconds() < 10)? "0" + date.getSeconds().toString():date.getSeconds().toString();
    this.dayTime = (date.getHours() < 12)? "AM":"PM";
    this.date = (date.getDate() < 10)? "0" + date.getDate().toString():date.getDate().toString();
    this.month = (date.getMonth() < 10)? "0" + date.getMonth().toString():date.getMonth().toString();
    this.year = (date.getFullYear() < 10)? "0" + date.getFullYear().toString():date.getFullYear().toString();
  }

}
