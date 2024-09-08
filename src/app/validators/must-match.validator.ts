import {
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function mustMatchValidator(
  baseControlName: string,
  matchingControlName: string,
): ValidatorFn {
  return (formGroup: FormGroup): ValidationErrors => {
    
    const baseControl = formGroup.get(baseControlName);
    const matchingControl = formGroup.get(matchingControlName);

    if (baseControl.value !== matchingControl.value) {
      return { mustmatch: true };
    }
    return null;
  };
}
