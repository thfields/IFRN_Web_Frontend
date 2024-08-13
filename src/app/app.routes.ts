import { Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { NovoComponent } from './novo/novo.component';
import { LoginComponent } from './login/login.component';
import { EditarComponent } from './editar/editar.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'listagem', component: ListagemComponent, canActivate: [authGuard]
  },
  {
    path: 'novo', component: NovoComponent,  canActivate: [authGuard]
  },
  {
    path: 'login', loadComponent:() =>
        import('./login/login.component').then((m) => m.LoginComponent),

  },
  {
    path: 'editar', component: EditarComponent,  canActivate: [authGuard]
  },
  {
    path:'', pathMatch: "full", redirectTo:'/listagem'
  }
];
