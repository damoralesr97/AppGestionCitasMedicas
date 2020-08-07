import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroFactura'
})
export class FiltroFacturaPipe implements PipeTransform {

  transform(factura: any[], texto: string): any[] {
    if (texto.length === 0) {
      return factura;
    }
    texto = texto.toLocaleLowerCase();

    return factura.filter( fac => {
      return fac.paciente.toLocaleLowerCase().includes(texto);
    } );
  }

}
