import {
  ChangeDetectorRef,
  Component,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { PHONE_MASK } from '../../consts/common-constants';

@Component({
  selector: 'app-phone-input',
  standalone: true,
  imports: [InputMaskModule, FormsModule],
  templateUrl: './phone-input.component.html',
  styleUrl: './phone-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => PhoneInputComponent),
    },
  ],
})
export class PhoneInputComponent implements ControlValueAccessor {
  public value: string;
  public disabled = false;
  public readonly phoneMask = PHONE_MASK;
  constructor(private _cdr: ChangeDetectorRef) {}

  onModelChange(): void {
    this._onChange(this.value);
  }

  onBlur(): void {
    this._onTouched();
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private _onChange = (value) => {};
  private _onTouched = () => {};
}
