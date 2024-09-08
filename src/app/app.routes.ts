import { Routes } from '@angular/router';
import { TemplateDrivenFormsComponent } from './pages/template-driven-forms/components/template-driven-forms/template-driven-forms.component';
import { MainComponent } from './pages/main/main.component';
import { NgModelFormComponent } from './pages/ng-model/components/ng-model-form/ng-model-form.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/components/reactive-forms/reactive-forms.component';
import { CustomizationComponent } from './pages/customization/customization.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'ng-model',
        component: NgModelFormComponent,
      },
      {
        path: 'template-driven-forms',
        component: TemplateDrivenFormsComponent,
      },
      {
        path: 'reactive-forms',
        component: ReactiveFormsComponent,
      },
      {
        path: 'customization',
        component: CustomizationComponent,
      },
    ],
  },
];
