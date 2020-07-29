import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'home-paciente',
    loadChildren: () => import('./pages/paciente/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ver-citas-paciente',
    loadChildren: () => import('./pages/paciente/ver-citas/ver-citas.module').then( m => m.VerCitasPageModule)
  },
  {
    path: 'crear-cita-paciente',
    loadChildren: () => import('./pages/paciente/crear-cita/crear-cita.module').then( m => m.CrearCitaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
