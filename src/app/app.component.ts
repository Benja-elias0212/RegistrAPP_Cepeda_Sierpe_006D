import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes: Componente[] = [ 
    {
      icon: 'man-outline',
      name: 'Quienes somos',
      redirecTo: '/quienes',
    },
    {
      icon: 'qr-code-outline',
      name: 'Codigo QR',
      redirecTo: '/codigo',
    },
    {
      icon: 'person-outline',
      name: 'Datos personales',
      redirecTo:'/datos',
    },
    {
      icon: 'people-circle-outline',
      name: 'Soporte',
      redirecTo:'/soporte',
    },
    
  ];




}