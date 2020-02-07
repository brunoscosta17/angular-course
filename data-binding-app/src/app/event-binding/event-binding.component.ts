import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName: string = "My Button";
  i: number = 0;
  spinnercolor: string = "primary";
  spinnermode: string = "determinate";
  spinnervalue: number = 0;
  btnDisable: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  save() {

  }

  inc() {
    this.i++;
    this.buttonName = "It was clicked " + this.i + " times"
  }

  disable() {
    this.btnDisable = true;
    this.spinnermode = "indeterminate";
    setTimeout(() => {
      this.btnDisable = false;
      this.spinnermode = "determinate";
    }, 3000);
  }

}
