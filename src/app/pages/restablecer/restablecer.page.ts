import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  
  handlerMessage = '';
  roleMessage = '';
  

  constructor(private alertController: AlertController){}

  ngOnInit() {
  }
  usuario={
    email:'',
    password:'',
  }
  async mensajeSaludo() {
    const alert = await this.alertController.create({
      header: '¡Su contraseña sera Restablecida!',
      message: 'Se enviara un enlace al correo para restablecer su contraseña.',
      buttons: ['OK'],
    });

    await alert.present();
  }
  


}