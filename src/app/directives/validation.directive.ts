import {
  computed,
  Directive,
  effect,
  ElementRef,
  input,
  Renderer2,
  signal,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { DefaultValidationMessages } from '../validators/validation-messages';

@Directive({
  selector: '[appValidation]',
  standalone: true,
})
export class ValidationDirective {
  public targetElement = input<unknown>(null);
  public validationMessages = input(new DefaultValidationMessages());

  private _targetElement: unknown;
  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2,
    private _control: NgControl
  ) {
    effect(() => {
      this._control.control['statusReactive']();
      this._control.control['touchedReactive']();
      this._processErrors(this._targetElement);
    });
  }

  public ngOnInit(): void {
    this._targetElement = this.targetElement();
    if (!this._targetElement) {
      const element = this._el.nativeElement;
      this._targetElement = this._renderer.createElement('div');
      this._renderer.appendChild(element.parentNode, this._targetElement);
    }
  }

  public ngOnDestroy(): void {
    this._renderer.removeClass(this._targetElement, 'validation-message');
    this._renderer.removeChild(
      this._el.nativeElement.parentNode,
      this._targetElement
    );
  }

  private _processErrors(messageElement): void {
    const errors = this._control.errors;

    if (
      this._control.valid ||
      !errors ||
      this._control.untouched ||
      !this._control.control?.touched
    ) {
      messageElement.innerHTML = '';
      this._renderer.removeClass(messageElement, 'validation-message');

      return;
    }

    const errorType = Object.keys(errors)[0];
    if (errorType in this.validationMessages()) {
      messageElement.innerHTML = this.validationMessages()[errorType](
        errors[errorType]
      );

      this._renderer.addClass(messageElement, 'validation-message');
    }
  }
}
