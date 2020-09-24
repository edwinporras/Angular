import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckLoginGuard } from './shared/guards/check-login.guard';

const routes: Routes = [
{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'notfound', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
{ path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
{ path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule),
canActivate:[CheckLoginGuard] },
{ path: 'crear', loadChildren: () => import('./pages/crear/crear.module').then(m => m.CrearModule) },
{ path: 'actualizar', loadChildren: () => import('./pages/actualizar/actualizar.module').then(m => m.ActualizarModule) },
{ path: 'actualizar', loadChildren: () => import('./pages/actualizar/actualizar.module').then(m => m.ActualizarModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
