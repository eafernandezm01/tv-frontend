import { Component, Input } from '@angular/core';
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
}
