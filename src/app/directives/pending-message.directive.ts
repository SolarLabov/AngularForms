import {
  Directive,
  effect,
  ElementRef,
  Host,
  input,
  Renderer2,
} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPendingMessage]',
  standalone: true,
  exportAs: 'foo'
})
export class PendingMessageDirective {
  text = input<string>('Проверяем ваш email...', { alias: 'pendingText' });
  private _targetElement: ElementRef;

  constructor(
    @Host() private control: NgControl,
    private _renderer: Renderer2,
    private _el: ElementRef
  ) {
    effect(() => {
      const status = this.control.control['statusReactive']();

      this._processMessage(status, this._targetElement);
    });
  }

  public ngOnInit(): void {
    if (!this._targetElement) {
      const element = this._el.nativeElement;
      this._targetElement = this._renderer.createElement('div');
      this._renderer.appendChild(element.parentNode, this._targetElement);
    }
  }

  public ngOnDestroy(): void {
    this._renderer.removeChild(this._el.nativeElement, this._targetElement)
  }

  private _processMessage(status, messageElement): void {
    if (status === 'PENDING') {
      messageElement.innerHTML = this.text();
      this._renderer.addClass(messageElement, 'validation-pending');
    } else {
      messageElement.innerHTML = '';
      this._renderer.removeClass(messageElement, 'validation-pending');
    }
  }
}
