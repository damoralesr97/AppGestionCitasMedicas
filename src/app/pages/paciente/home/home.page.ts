import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Paciente } from 'src/app/shared/models/paciente';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  paciente: any = {
    id: '',
    data: {} as Paciente
  };

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.afAuth.signOut();
    this.router.navigateByUrl('login');
  }

}
