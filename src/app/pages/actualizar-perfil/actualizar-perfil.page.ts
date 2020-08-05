import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Camera } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { tap, finalize, filter } from 'rxjs/operators';

@Component({
  selector: 'app-actualizar-perfil',
  templateUrl: './actualizar-perfil.page.html',
  styleUrls: ['./actualizar-perfil.page.scss'],
})
export class ActualizarPerfilPage implements OnInit {
  usuario: any = {
    id: '',
    data: {},
    img: ''
  };
  image: any;

  constructor(private authSrv: AuthService, private camera: Camera, private storage: AngularFireStorage) { }

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

  actualizarUsuario() {
    if (this.image != null) {
      try {
        const path = `profilePictures/${new Date().getTime()}`;
        const ref = this.storage.ref(path);

        const task = ref.putString(this.image, 'data_url');

        task.snapshotChanges().pipe(
          finalize(() => {
            const downloadURL = ref.getDownloadURL();
            downloadURL.subscribe(url => {
              this.usuario.img = url;
              this.authSrv.updateUser(this.usuario);
            });
          })
        )
        .subscribe();
      } catch (error) {
        console.error('error', JSON.stringify(error));
      }
    } else{
      this.authSrv.updateUser(this.usuario);
    }
  }

  sacarCamara() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight: 1024,
      targetWidth: 1024,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }).then(resultado => {
      this.image = 'data:image/jpeg;base64,' + resultado;
    }).catch(error => {
      console.log(error.message);
    });
  }

  tomarGaleria() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight: 1024,
      targetWidth: 1024,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }).then(resultado => {
      this.image = 'data:image/jpeg;base64,' + resultado;
    }).catch(error => {
      console.log(error.message);
    });
  }

}
