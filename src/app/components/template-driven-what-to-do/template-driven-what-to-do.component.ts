import { Component } from '@angular/core';
import { CodeHighlightComponent } from '../code-highlight/code-highlight.component';

@Component({
  selector: 'app-template-driven-what-to-do',
  standalone: true,
  imports: [CodeHighlightComponent],
  templateUrl: './template-driven-what-to-do.component.html',
  styleUrl: './template-driven-what-to-do.component.scss'
})
export class TemplateDrivenWhatToDoComponent {

}
