import {
  AsyncValidatorFn,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import {
  delay,
  Observable,
  of,
  switchMap,
  tap,
  timer,
} from 'rxjs';

export function emailExistsValidator(): AsyncValidatorFn {
  return (formControl: FormControl): Observable<ValidationErrors> => {
    return timer(500).pipe(
      delay(1000),
      tap(() => formControl.markAsTouched()),
      switchMap(() =>
        formControl.value === 'exists@mail.ru'
          ? of({ emailExists: true })
          : of(null)
      )
    );
  };
}
