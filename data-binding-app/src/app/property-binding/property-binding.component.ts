import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  color: string = "accent";
  btnDisabled: Boolean = true;
  colors: any = [
    'primary',
    'accent',
    'warn',
    ''
  ];
  id: number = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.id = (this.id + 1) % this.colors.length;
      console.log(this.id);
    }, 1000)
  }

}
