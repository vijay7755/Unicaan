import { Component, Input, Output, EventEmitter  } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}


@Component({
  selector: 'alert-closeable',
  templateUrl: './alert.component.html'
})
export class AlertComponent {
  @Input() erMessage: string;
  @Output() close = new EventEmitter<void>();

  alert: Alert = {
    type: 'danger',
    message: 'This is a dark alert'
  }

  OnClose() {
    this.close.emit();
  }

}