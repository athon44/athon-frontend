import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() name: string = 'Default';
  @Input() placeholder: string = 'Default';
  @Input() type: string = 'text';

  constructor() { }

  ngOnInit() {
  }

}
