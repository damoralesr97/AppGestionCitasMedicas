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
  {
    path: 'home-admin',
    loadChildren: () => import('./pages/admin/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ver-medicos-admin',
    loadChildren: () => import('./pages/admin/medicos/ver-medicos/ver-medicos.module').then( m => m.VerMedicosPageModule)
  },
  {
    path: 'crear-medico-admin',
    loadChildren: () => import('./pages/admin/medicos/crear-medico/crear-medico.module').then( m => m.CrearMedicoPageModule)
  },
  {
    path: 'editar-medico-admin/:id',
    loadChildren: () => import('./pages/admin/medicos/editar-medico/editar-medico.module').then( m => m.EditarMedicoPageModule)
  },
  {
    path: 'ver-pacientes-admin',
    loadChildren: () => import('./pages/admin/pacientes/ver-pacientes/ver-pacientes.module').then( m => m.VerPacientesPageModule)
  },
  {
    path: 'crear-paciente-admin',
    loadChildren: () => import('./pages/admin/pacientes/crear-paciente/crear-paciente.module').then( m => m.CrearPacientePageModule)
  },
  {
    path: 'editar-paciente-admin/:id',
    loadChildren: () => import('./pages/admin/pacientes/editar-paciente/editar-paciente.module').then( m => m.EditarPacientePageModule)
  },
  {
    path: 'actualizar-perfil',
    loadChildren: () => import('./pages/actualizar-perfil/actualizar-perfil.module').then( m => m.ActualizarPerfilPageModule)
  },
  {
    path: 'actualizar-contrasena',
    loadChildren: () => import('./pages/actualizar-contrasena/actualizar-contrasena.module').then( m => m.ActualizarContrasenaPageModule)
  },
  {
    path: 'citas-solicitudes',
    loadChildren: () => import('./pages/Medico/citas-solicitudes/citas-solicitudes.module').then( m => m.CitasSolicitudesPageModule)
  },
  {
    path: 'consultas-medico',
    loadChildren: () => import('./pages/Medico/consultas-medico/consultas-medico.module').then( m => m.ConsultasMedicoPageModule)
  },
  {
    path: 'consulta-medico/:id',
    loadChildren: () => import('./pages/Medico/consulta-medico/consulta-medico.module').then( m => m.ConsultaMedicoPageModule)
  },
  {
    path: 'crear-consulta-medico/:id',
    loadChildren: () => import('./pages/Medico/crear-consulta-medico/crear-consulta-medico.module').then( m => m.CrearConsultaMedicoPageModule)
  },
  {
    path: 'crear-receta/:id',
    loadChildren: () => import('./pages/Medico/crear-receta/crear-receta.module').then( m => m.CrearRecetaPageModule)
  },
  {
    path: 'receta/:id',
    loadChildren: () => import('./pages/Medico/receta/receta.module').then( m => m.RecetaPageModule)
  },
  {
    path: 'citas-medico-atendidas',
    loadChildren: () => import('./pages/Medico/citas-medico-atendidas/citas-medico-atendidas.module').then( m => m.CitasMedicoAtendidasPageModule)
  },
  {
    path: 'citas-medico-por-atender',
    loadChildren: () => import('./pages/Medico/citas-medico-por-atender/citas-medico-por-atender.module').then( m => m.CitasMedicoPorAtenderPageModule)
  },
  {
    path: 'inicio-medico',
    loadChildren: () => import('./pages/Medico/inicio-medico/inicio-medico.module').then( m => m.InicioMedicoPageModule)
  },
  {
    path: 'citas-medico',
    loadChildren: () => import('./pages/Medico/citas-medico/citas-medico.module').then( m => m.CitasMedicoPageModule)
  },
  {
    path: 'cita-medico/:id',
    loadChildren: () => import('./pages/Medico/cita-medico/cita-medico.module').then( m => m.CitaMedicoPageModule)
  },
  {
    path: 'crear-cita-medico',
    loadChildren: () => import('./pages/Medico/crear-cita-medico/crear-cita-medico.module').then( m => m.CrearCitaMedicoPageModule)
  },
  {
    path: 'ver-citas',
    loadChildren: () => import('./pages/admin/citas/ver-citas/ver-citas.module').then( m => m.VerCitasPageModule)
  },
  {
    path: 'ver-facturas',
    loadChildren: () => import('./pages/admin/facturas/ver-facturas/ver-facturas.module').then( m => m.VerFacturasPageModule)
  },
  {
    path: 'ver-facturas-paciente',
    loadChildren: () => import('./pages/paciente/facturas/ver-facturas/ver-facturas.module').then( m => m.VerFacturasPageModule)
  },
  {
    path: 'factura-paciente/:id',
    loadChildren: () => import('./pages/paciente/facturas/factura/factura.module').then( m => m.FacturaPageModule)
  },
  {
    path: 'ver-historiales-paciente',
    loadChildren: () => import('./pages/paciente/historiales/ver-historiales/ver-historiales.module').then( m => m.VerHistorialesPageModule)
  },
  {
    path: 'historial-paciente/:id',
    loadChildren: () => import('./pages/paciente/historiales/historial/historial.module').then( m => m.HistorialPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
