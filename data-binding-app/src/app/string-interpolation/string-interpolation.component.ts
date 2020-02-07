import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  person: any = {
    firstname: 'Bruno',
    lastname: 'Costa',
    age: 31,
    address: 'Route 100'

  }
  constructor() { }

  ngOnInit() {
  }

}
