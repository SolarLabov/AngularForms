import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AngularSvgIconModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  public angularSrc = '/public/icons/angular.svg';
  public solarLabSrc = '/public/icons/solarlab.svg';
}
