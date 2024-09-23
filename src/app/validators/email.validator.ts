import {
  AsyncValidatorFn,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { delay, Observable, of, switchMap, tap, timer } from 'rxjs';

export function emailExistsValidator(): AsyncValidatorFn {
  return (formControl: FormControl): Observable<ValidationErrors> => {
    return timer(500).pipe(
      switchMap(() => checkEmail(formControl)),
      switchMap((isAvailable) => {
        return !isAvailable
          ? of({ emailExists: true })
          : of(null);
      })
    );
  };
}

function checkEmail(formControl): Observable<any> {
  return of(null).pipe(
    delay(3000),
    tap(() => formControl.markAsTouched()),
    switchMap(() => of(formControl.value !== 'exists@mail.ru'))
  );
}
