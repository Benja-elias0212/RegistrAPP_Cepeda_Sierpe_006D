import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService } from '../../services/registroservice.service';




@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  usuarios: any[] = [];
  nombre;
  correo;
  tipo

  
  constructor(private menuController: MenuController,
    private navController: NavController,
    public alertController: AlertController,
    private registroService: RegistroserviceService) {
      this.nombre = localStorage.getItem ('nomUsuario')
      this.correo = localStorage.getItem ('correo')
      this.tipo = localStorage.getItem ('tipo')

    }

  ngOnInit() {
    this.registroService.getUsuarios().then(datos=>{
      this.usuarios = datos;
    })
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

async cerrarSesion() {
  const alert = await this.alertController.create({
    cssClass: 'cerrarSesion-class',
    header: '¿Está Seguro Que Desea Cerrar Sesión?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('La sesión no cerró');
        }
      }, {
        text: 'Confirmar',
        handler: () => {
          localStorage.setItem('ingresado', 'false');
          this.navController.navigateRoot('home');

          console.log('Sesión Cerrada');
        }
      }
    ]
  });

  await alert.present();
}

} 



