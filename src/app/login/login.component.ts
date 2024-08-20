import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { LoginUser } from '../login-user';
import { HttpErrorResponse } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, PasswordModule   ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  usuario = 'maria@ifrn.edu.br';
  senha = '';
  mensagemErro = '';

  constructor(private router: Router, private loginService: LoginService) {}

  onLogin(): void {
    this.mensagemErro = '';
    const USER: LoginUser = { email: this.usuario, senha: this.senha };
    this.loginService.login(USER).subscribe({
      next: (retorno: any) => {
        localStorage.setItem('token', retorno.acessToken);
        this.router.navigate(['/']);
      },
      error: (erro: HttpErrorResponse ) => {
        this.mensagemErro = erro.error.mensagemerro;
      }
    });
  }
}
