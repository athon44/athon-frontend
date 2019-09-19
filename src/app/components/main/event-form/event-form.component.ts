import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      limit: [null],
      passowrd: [null, Validators.required]
    })
  }
    
  create() {
    console.log(this.form)
  }

}
