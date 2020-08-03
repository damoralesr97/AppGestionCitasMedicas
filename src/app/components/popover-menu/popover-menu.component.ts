import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-menu',
  templateUrl: './popover-menu.component.html',
  styleUrls: ['./popover-menu.component.scss'],
})
export class PopoverMenuComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router, private popoverControl: PopoverController) { }

  ngOnInit() {}

  logout(){
    this.popoverControl.dismiss();
    this.afAuth.signOut();
    this.router.navigateByUrl('login');
  }

  actualizarPerfil() {
    this.popoverControl.dismiss();
    this.router.navigateByUrl('actualizar-perfil');
  }

  actualizarContrasena() {
    this.popoverControl.dismiss();
    this.router.navigateByUrl('actualizar-contrasena');
  }

}
