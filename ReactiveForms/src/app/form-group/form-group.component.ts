import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  clientForm = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    address: new FormGroup({
      street: new FormControl(null, Validators.required),
      neighborhood: new FormControl(null, Validators.required)
    }),
  });

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.clientForm.value);
  }

}
