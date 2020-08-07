import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPaciente'
})
export class FiltroPacientePipe implements PipeTransform {

  transform(pacientes: any[], texto: string): any[] {
    if (texto.length === 0) {
      return pacientes;
    }
    texto = texto.toLocaleLowerCase();

    return pacientes.filter( pac => {
      return pac.nombres.toLocaleLowerCase().includes(texto) || pac.apellidos.toLocaleLowerCase().includes(texto);
    } );
  }
 }

