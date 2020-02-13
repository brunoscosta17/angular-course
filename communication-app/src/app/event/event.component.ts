import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  value: number = 0
  title: string = "My title";

  constructor() { }

  ngOnInit() {
  }

  incBy(event: number) {
    this.value += event;
    console.log(event)
  }

}
