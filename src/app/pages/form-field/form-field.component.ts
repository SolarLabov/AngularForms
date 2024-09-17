import { Component } from '@angular/core';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  public text = 'SolarLab Academy';

  public changeText(event) {
    this.text = event.target.value
  }
}
