import { NgModule } from '@angular/core';
import { FiltroMedicoPipe } from './filtro-medico.pipe';
import { FiltroPacientePipe } from './filtro-paciente.pipe';



@NgModule({
  declarations: [FiltroMedicoPipe, FiltroPacientePipe],
  exports: [FiltroMedicoPipe, FiltroPacientePipe]
})
export class PipesModule { }
