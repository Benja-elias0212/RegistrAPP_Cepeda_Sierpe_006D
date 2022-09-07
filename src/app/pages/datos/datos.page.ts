import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  
  constructor(private menuController: MenuController) {}

  ngOnInit() {
  }
  mostrarMenu
()
{this.menuController.open('first');}
}
