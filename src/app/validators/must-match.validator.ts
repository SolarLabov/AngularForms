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
      matchingControl.setErrors({ mustMatch: true });
      return { mustMatch: true };
    }
    return null;
  };
}
