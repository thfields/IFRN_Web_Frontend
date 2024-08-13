import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IFRN_Web_Frontend';

  constructor(private router: Router) {}

  logoff(event: MouseEvent): void {
    event.preventDefault();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isAuthentucated(): boolean {
    if(localStorage.getItem('token')){
      return true;
    } else {
      return false
    }
  }
}
