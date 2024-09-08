import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CodeHighlightComponent } from '../../../../components/code-highlight/code-highlight.component';
import { genders$ } from '../../../../mocks/genders';
import { ValidationMessageComponent } from '../../../../components/validation-message/validation-message.component';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    NgIf,
    NgFor,
    CodeHighlightComponent,
    AsyncPipe,
    ValidationMessageComponent
  ],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss',
})
export class TemplateDrivenFormsComponent {
  public form = {
    firstName: '',
    lastName: '',
    birthdayDate: '',
    emailAddress: '',
    gender: '',
    address: '',
  };

  @ViewChild('registrationForm') ngForm: NgForm;

  genders$ = genders$;

  defaultGender: string = 'male';
  defaultCountry: string = 'India';

  public submit(): void {
    console.log(this.ngForm);
    Object.assign(this.form, this.ngForm.value);
  }
}
