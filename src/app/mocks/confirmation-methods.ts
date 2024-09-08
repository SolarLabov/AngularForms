import { of } from 'rxjs';

export enum ConfirmationMethodsEnum {
  EMAIL = 1,
  PHONE = 2,
}

export const confirmationMethods$ = of([
  { value: ConfirmationMethodsEnum.EMAIL, label: 'Эл. почта' },
  { value: ConfirmationMethodsEnum.PHONE, label: 'Телефон' },
]);
