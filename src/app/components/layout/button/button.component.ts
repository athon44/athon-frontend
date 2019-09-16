import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text = '';
  @Input() type = 'button';
  @Output() event = new EventEmitter<any>();

  constructor() { }

  clickEvent() {
    this.event.emit();
  }

  ngOnInit() {
  }

}
