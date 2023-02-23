import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() nombre:string=""
  @Input() color:string=""
  @Input() edad:number=14
  incrementarEdad(){
    this.edad=this.edad+1
  }
  disminuirEdad(){
    this.edad=this.edad-1
  }
}
