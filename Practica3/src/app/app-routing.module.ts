import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'consulta', loadChildren: () => import('./pages/consulta/consulta.module').then(m => m.ConsultaModule) },
  { path: 'formulario', loadChildren: () => import('./pages/formulario/formulario.module').then(m => m.FormularioModule) },
  { path: 'tabla', loadChildren: () => import('./pages/tabla/tabla.module').then(m => m.TablaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
