import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RegistroserviceService } from '../../services/registroservice.service';

@Component({
  selector: 'app-quienes',
  templateUrl: './quienes.page.html',
  styleUrls: ['./quienes.page.scss'],
})
export class QuienesPage implements OnInit {

  usuarios: any[] = [];

  constructor(private menuController: MenuController,
  private registroService: RegistroserviceService ) {}

  ngOnInit(){
    this.registroService.getUsuarios().then(datos=>{
      this.usuarios = datos;
    })

  }

  mostrarMenu()
  {this.menuController.open('first');

  }
  
}

