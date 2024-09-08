import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-code-highlight',
  standalone: true,
  imports: [Highlight, HighlightLineNumbers],
  templateUrl: './code-highlight.component.html',
  styleUrl: './code-highlight.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeHighlightComponent {
  public code = input<string>()
  public language = input<string>('html')
}
