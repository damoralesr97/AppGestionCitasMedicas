import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCita'
})
export class FiltroCitaPipe implements PipeTransform {

  transform(citas: any[], texto: string): any[] {
    if (texto.length === 0) {
      return citas;
    }
    texto = texto.toLocaleLowerCase();

    return citas.filter( cit => {
      return cit.paciente.toLocaleLowerCase().includes(texto);
    } );
  }

}
