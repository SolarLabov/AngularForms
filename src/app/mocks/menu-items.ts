import { MegaMenuItem, MenuItem } from 'primeng/api';

export const menuItems: MegaMenuItem[] = [
  {
    label: 'Главная',
  },
  {
    label: 'Директива NgModel',
    routerLink: ['/ng-model'],
  },
  {
    label: 'Template Driven Forms',
    routerLink: ['/template-driven-forms'],
  },
  {
    label: 'Reactive Forms',
    routerLink: ['/reactive-forms'],
  },
  {
    label: 'Кастомизация',
    routerLink: ['/customization'],
  },
  // {
  //   label: 'Template Driven Forms VS Reactive Forms',
  //   routerLink: ['/reactive-forms'],
  // },
];
