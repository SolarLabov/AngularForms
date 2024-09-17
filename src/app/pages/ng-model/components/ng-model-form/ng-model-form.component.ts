import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ng-model-form.component.html',
  styleUrl: './ng-model-form.component.scss',
})
export class NgModelFormComponent {
  public text: string;
  public control: FormControl =  new FormControl();

  private _defaultValue = 'Значение по умолчанию';

  constructor() {
    this.text = this._defaultValue;
  }

  public resetControl(): void {
    console.log(this.text);

    this.text = this._defaultValue;
  }

  public onModelChange(): void {
    console.log(this.control);
  }

  compositionend(event) {
    console.log(event)
  }
}
