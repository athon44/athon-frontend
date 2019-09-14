import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() name = '';
  @Input() placeholder = 'Enter a text';
  @Input() type = 'text';

  constructor() { }

  ngOnInit() {
  }

}
