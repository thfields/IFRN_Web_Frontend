import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MenubarModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projetoapiangular';
  items: MenuItem[] = [
    {
      label: 'Listagem',
      icon: 'pi pi-home'
    },
    {
      label: 'Novo',
      icon: 'pi pi-star'
    },
    {
      label: 'Sair',
      icon: 'pi pi-star'
    },
  ];

  constructor(private router: Router) {}

  logoff(event: MouseEvent): void {
    event.preventDefault();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
