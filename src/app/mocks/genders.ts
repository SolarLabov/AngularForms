import { of } from 'rxjs';

export enum GenderEnum {
  MALE = 'male',
  FEMALE = 'female',
}

export const gender$ = of([
  { value: GenderEnum.MALE, label: 'Мужской' },
  { value: GenderEnum.FEMALE, label: 'Женский' },
]);
