import { Component, OnInit } from '@angular/core';
import { Factura } from '../../../../shared/models/factura.class';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../../../shared/services/paciente.service';
import { Paciente } from 'src/app/shared/models/paciente';
import { AuthService } from '../../../../shared/services/auth.service';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {
  pdfObj = null;
  factura: any = {
    id: '',
    data: {} as Factura
  };
  paciente: any = {
    id: '',
    data: {} as Paciente
  };
  

  // tslint:disable-next-line: max-line-length
  constructor(public authSrv: AuthService, public router: Router, private pacienteSrv: PacienteService, private route: ActivatedRoute, private plt: Platform, private file: File, private fileOpener: FileOpener) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.pacienteSrv.getFactura(id).subscribe(res => {
      this.factura.id = res.payload.id;
      this.factura.data = res.payload.data();
    });
    (await this.authSrv.getUser()).subscribe(resp => {
      this.pacienteSrv.getPaciente(resp.uid).subscribe((res) => {
        if (res.payload.data() != null){
          this.paciente.id = res.payload.id;
          this.paciente.data = res.payload.data();
        } else {
          this.paciente.data = {} as Paciente;
        }
      });
    });
  }

  downloadPdf() {

    ///////////////////////////// Crea el pdf //////////////////////////
    var pdfMake = require('pdfmake/build/pdfmake.js');
    var pdfFonts = require('pdfmake/build/vfs_fonts.js');
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const docDefinition = {
      content: [
        { text: 'Factura', style: 'header' },

        // tslint:disable-next-line: max-line-length
        { text: 'Cedula/Ruc : ' + this.paciente.data.cedula + '                                        Telefono: ' + this.paciente.data.telefono, style: 'cliente1'},
        { text: 'Cliente : ' + this.paciente.data.nombres + ' ' + this.paciente.data.apellidos, style: 'cliente2'},
        { text: 'Correo : ' + this.paciente.data.email, style: 'cliente2'},

        { text: 'Fecha emision: ' + this.factura.data.fecha, style: 'fecha' },

        { text: '-----------------------------------------------------------------------------------------------------------------------------------------------------------'},

        { text: 'Descripcion Consulta', style: 'tituloDescripcion' },
        { text: this.factura.data.concepto, style: 'descripcion' },

        { text: 'Subtotal' + '     Total', style: 'tituloDescripcion' },
        { text: this.factura.data.subtotalCero + '               ' + this.factura.data.total, style: 'descripcion' },

        { text: '-----------------------------------------------------------------------------------------------------------------------------------------------------------'},

        { text: 'Forma Pago: ' + this.factura.data.formaPago, style: 'formaPago' },

        { text: 'Subtotal 0:   ' + this.factura.data.subtotalCero, style: 'subtotal0' },
        { text: 'Subtotal Iva:   ' + this.factura.data.subtotalIva, style: 'subtotalIva' },
        { text: 'Iva 12%:   ' + this.factura.data.iva, style: 'iva' },
        { text: 'TOTAL:   ' + this.factura.data.total, style: 'total' },

      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
        },

        cliente1: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 0],
        },

        cliente2: {
          fontSize: 14,
          bold: true,
          margin: [0, 12, 0, 0],
        },

        fecha: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },

        tituloDescripcion: {
          fontSize: 14,
          bold: true,
          margin: [0, 18, 0, 0]
        },

        descripcion: {
          fontSize: 14,
          bold: false,
          margin: [0, 20, 0, 0]
        },

        formaPago: {
          fontSize: 14,
          bold: false,
          margin: [0, 25, 0, 0]
        },

        subtotal0: {
          fontSize: 14,
          bold: false,
          margin: [0, 28, 0, 0]
        },

        subtotalIva: {
          fontSize: 14,
          bold: false,
        },

        iva: {
          fontSize: 14,
          bold: false,
        },

        total: {
          fontSize: 14,
          bold: false,
        },
      }
    };
    this.pdfObj = pdfMake.createPdf(docDefinition);

    /////////////////////// Descarga el PDF////////////////////////////

    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        const blob = new Blob([buffer], { type: 'application/pdf' });

        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
        });
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }
}
