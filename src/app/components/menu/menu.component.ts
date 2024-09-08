import { Component } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { menuItems } from '../../mocks/menu-items';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MegaMenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  items: MegaMenuItem[] = menuItems;

  ngOnInit() {

  }
}
