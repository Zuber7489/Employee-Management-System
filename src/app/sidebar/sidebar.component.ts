import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentTime: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    // Update the time every second
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  getCurrentTime(): Date {
    return this.currentTime;
  }
}
