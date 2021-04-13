import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }
  numero:number =15;
/**funcion 
sumar(){
  this.numero +=5;
}
restar(){
  this.numero -=5;
}
*/


accionOperacion(valor:number){
  this.numero+=valor;
}
  ngOnInit():void {
  }

}