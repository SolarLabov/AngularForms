import { Component, ContentChild } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  standalone: true,
  imports: [],
  templateUrl: './validation-message.component.html',
  styleUrl: './validation-message.component.scss',
})
export class ValidationMessageComponent {
  @ContentChild(NgControl) public control: NgControl;

  public get errors() {
    return this.control.errors;
  }
}
