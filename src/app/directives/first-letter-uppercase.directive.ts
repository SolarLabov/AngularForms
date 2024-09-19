import { Directive, Inject } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { firstLetterUppercaseValidator } from '../validators/first-letter-uppercase.validator';

@Directive({
  selector: '[appFirstLetterUppercase]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: FirstLetterUppercaseDirective,
      multi: true,
    },
  ],
})
export class FirstLetterUppercaseDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    return firstLetterUppercaseValidator()(control);
  }
}
