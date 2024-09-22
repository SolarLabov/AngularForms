import { Routes } from '@angular/router';
import { TemplateDrivenFormsComponent } from './pages/template-driven-forms/components/template-driven-forms/template-driven-forms.component';
import { MainComponent } from './layout/main/main.component';
import { NgModelFormComponent } from './pages/ng-model/components/ng-model-form/ng-model-form.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { CustomizationComponent } from './pages/customization/customization.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'main',
        loadComponent: () =>
          import('./pages/main-page/main-page.component').then(
            (c) => c.MainPageComponent
          ),
      },
      {
        path: 'ng-model',
        loadComponent: () =>
          import(
            './pages/ng-model/components/ng-model-form/ng-model-form.component'
          ).then((c) => c.NgModelFormComponent),
      },
      {
        path: 'template-driven-forms',
        loadComponent: () =>
          import(
            './pages/template-driven-forms/components/template-driven-forms/template-driven-forms.component'
          ).then((c) => c.TemplateDrivenFormsComponent),
      },
      {
        path: 'reactive-forms',
        loadComponent: () =>
          import(
            './pages/reactive-forms/reactive-forms.component'
          ).then((c) => c.ReactiveFormsComponent),
      },
      {
        path: 'customization',
        loadComponent: () =>
          import('./pages/customization/customization.component').then(
            (c) => c.CustomizationComponent
          ),
      },
      {
        path: 'form-field',
        loadComponent: () =>
          import('./pages/form-field/form-field.component').then(
            (c) => c.FormFieldComponent
          ),
      },
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },
    ],
  },
];
