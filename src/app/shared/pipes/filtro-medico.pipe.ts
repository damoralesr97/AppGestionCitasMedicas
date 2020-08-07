import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroMedico'
})
export class FiltroMedicoPipe implements PipeTransform {

  transform(medicos: any[], texto: string): any[] {
    if (texto.length === 0) {
      return medicos;
    }
    texto = texto.toLocaleLowerCase();

    return medicos.filter( med => {
      return med.nombres.toLocaleLowerCase().includes(texto) || med.apellidos.toLocaleLowerCase().includes(texto);
    } );
  }

}
