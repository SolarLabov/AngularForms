import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { genders$ } from '../../../../mocks/genders';
import { ValidationMessageComponent } from '../../../../components/validation-message/validation-message.component';
import { TemplateDrivenWhatToDoComponent } from '../../../../components/template-driven-what-to-do/template-driven-what-to-do.component';
import { DialogService } from 'primeng/dynamicdialog';
import { SubmitResultComponent } from '../../../../components/submit-result/submit-result.component';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    NgIf,
    NgFor,
    TemplateDrivenWhatToDoComponent,
    AsyncPipe,
    ValidationMessageComponent,
  ],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss',
})
export class TemplateDrivenFormsComponent {
  @ViewChild('registrationForm') ngForm: NgForm;

  genders$ = genders$;

  constructor(private _dialogService: DialogService) {}

  public submit(): void {
    this._dialogService.open(SubmitResultComponent, {
      data: {
        user: this.ngForm.form.value,
      },
      width: '600px',
      header: 'Проверьте свои данные'
    });
  }
}
