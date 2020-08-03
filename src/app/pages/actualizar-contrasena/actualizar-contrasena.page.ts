import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Contrasena } from '../../shared/models/contrasena';

@Component({
  selector: 'app-actualizar-contrasena',
  templateUrl: './actualizar-contrasena.page.html',
  styleUrls: ['./actualizar-contrasena.page.scss'],
})
export class ActualizarContrasenaPage implements OnInit {
  usuario: any = {
    id: '',
    data: {}
  };
  contrasena: Contrasena = new Contrasena();

  constructor(private authSrv: AuthService,private router:Router) { }

  async ngOnInit() {
    (await this.authSrv.getUser()).subscribe(resp => {
      this.authSrv.getDataUser(resp.uid).subscribe((res) => {
        if (res.payload.data() != null){
          this.usuario.id = res.payload.id;
          this.usuario.data = res.payload.data();
        } else {
          this.usuario.data = {};
        }
      });
  });
  }

  updatePassword() {
    if (this.usuario.data.contrasena === this.contrasena.oldPass){
      console.log('coincide');
      this.authSrv.updatePassword(this.contrasena.newPass);
      this.authSrv.cerraSesion();
      this.router.navigateByUrl('/login');
    } else {
      console.log('no coincide');
    }
  }
}
