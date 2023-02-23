import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  frutasFavoritas:Array<string>=["Naranja","Sandia","Papaya","Mango"]
  
  alumnos:Array<any>=[{nombre:"Roberto",edad:28}, {nombre:"Sharon",edad:25}, {nombre:"Kevin",edad:30}]
}

