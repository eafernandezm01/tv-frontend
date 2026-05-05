import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IContenido } from '../../model/IContenido';

@Component({
  selector: 'app-tarjeta-contenido',
  imports: [],
  templateUrl: './tarjeta-contenido.html',
  styleUrl: './tarjeta-contenido.css',
})
export class TarjetaContenido {
  @Input()
  contenido!: IContenido;

  @Output()
  iradetalle = new EventEmitter ();

  llamaAlPadre ():void{
    console.log ('Hola');
    this.iradetalle.emit (true);
  }
}
