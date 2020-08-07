import { NgModule } from '@angular/core';
import { FiltroMedicoPipe } from './filtro-medico.pipe';
import { FiltroPacientePipe } from './filtro-paciente.pipe';
import { FiltroCitaPipe } from './filtro-cita.pipe';
import { FiltroFacturaPipe } from './filtro-factura.pipe';



@NgModule({
  declarations: [FiltroMedicoPipe, FiltroPacientePipe, FiltroCitaPipe, FiltroFacturaPipe],
  exports: [FiltroMedicoPipe, FiltroPacientePipe, FiltroCitaPipe, FiltroFacturaPipe]
})
export class PipesModule { }
