import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { PhoneInputComponent } from '../../../../components/phone-input/phone-input.component';
import { GenderEnum, genders$ } from '../../../../mocks/genders';
import { AsyncPipe, NgClass } from '@angular/common';
import { mustMatchValidator } from '../../../../validators/must-match.validator';
import { emailExistsValidator } from '../../../../validators/email.validator';
import { PendingMessageDirective } from '../../../../directives/pending-message.directive';
import {
  confirmationMethods$,
  ConfirmationMethodsEnum,
} from '../../../../mocks/confirmation-methods';
import { tap } from 'rxjs';
import { ValidationMessageComponent } from '../../../../components/validation-message/validation-message.component';
import { ValidationDirective } from '../../../../directives/validation.directive';
import { SubmitResultComponent } from '../../../../components/submit-result/submit-result.component';
import { DialogService } from 'primeng/dynamicdialog';
import { AddButtonComponent } from '../../../../components/add-button/add-button.component';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PhoneInputComponent,
    AsyncPipe,
    PendingMessageDirective,
    ValidationDirective,
    AddButtonComponent,
    NgClass,
  ],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent implements OnInit {
  public form: FormGroup;
  public genders$ = genders$;
  public confirmationMethods$ = confirmationMethods$;

  public readonly ConfirmationMethodsEnum = ConfirmationMethodsEnum;

  public get methodControl(): FormControl {
    return this.form.get('method') as FormControl;
  }

  public get passwordControl(): FormControl {
    return this.form.get('passwords').get('password') as FormControl;
  }

  public get repeatPasswordControl(): FormControl {
    return this.form.get('passwords').get('repeatPassword') as FormControl;
  }

  public get addressesForm() {
    return (this.form.get('addresses') as FormArray).controls;
  }

  constructor(private _fb: FormBuilder, private _dialogService: DialogService) {
    this.form = this._fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      passwords: this._fb.group(
        {
          password: ['', [Validators.required]],
          repeatPassword: ['', [Validators.required]],
        },
        { validators: mustMatchValidator('password', 'repeatPassword') }
      ),
      birthdayDate: ['', [Validators.required]],
      gender: [GenderEnum.MALE, [Validators.required]],
      method: [ConfirmationMethodsEnum.EMAIL, [Validators.required]],
      addresses: this._fb.array([
        this._fb.group({ address: ['', Validators.required] }),
      ]),
    });
  }

  public ngOnInit(): void {
    this._subscribeToConfirmationMethodChanges();
  }

  public send(): void {
    console.log(this.form);
    this._dialogService.open(SubmitResultComponent, {
      data: {
        user: this.form.getRawValue(),
      },
      width: '600px',
      header: 'Проверьте свои данные',
    });
  }

  public disable(): void {
    this.form.disable();
  }

  public addAddressControl() {
    console.log(this.form);
    const item = this._fb.group({
      address: ['', [Validators.required]],
    });

    (this.form.get('addresses') as FormArray).push(item);
  }

  private _subscribeToConfirmationMethodChanges() {
    this._handleConfirmationMethodForm(this.methodControl.value);
    this.methodControl.valueChanges
      .pipe(
        tap(() => {
          console.log('method');
        }),
        tap((method) => this._handleConfirmationMethodForm(method))
      )
      .subscribe();

    this.form
      .get('firstName')
      .valueChanges.pipe(tap((val) => console.log(val)))
      .subscribe();
  }

  private _handleConfirmationMethodForm(method: ConfirmationMethodsEnum): void {
    switch (method) {
      case ConfirmationMethodsEnum.EMAIL:
        this.form.addControl(
          'email',
          new UntypedFormControl(
            '',
            [Validators.required],
            emailExistsValidator()
          )
        );
        this.form.removeControl('phone');
        break;
      case ConfirmationMethodsEnum.PHONE:
        this.form.addControl(
          'phone',
          new UntypedFormControl('', [Validators.required])
        );
        this.form.removeControl('email');
    }
  }
}
