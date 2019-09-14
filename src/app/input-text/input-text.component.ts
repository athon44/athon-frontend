import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() name: String = 'Default';
  @Input() placeholder: String = 'Default';

  constructor() { }

  ngOnInit() {
  }

}
