import { Component, OnInit } from '@angular/core';
import { IContenido } from '../../model/IContenido';
import { PlataformaService } from '../../services/plataforma-service';
import { TarjetaContenido } from '../../components/tarjeta-contenido/tarjeta-contenido';

// ConosoleNinja (extension)
@Component({
  selector: 'app-listado-contenido',
  imports: [TarjetaContenido],
  templateUrl: './listado-contenido.html',
  styleUrl: './listado-contenido.css',
})
export class ListadoContenido implements OnInit {
  listContenido!: IContenido[];

  constructor(private plataformaService: PlataformaService) {}

  ngOnInit(): void {
    this.plataformaService.getListadoContenido().subscribe((data) => {
      console.log(data);
      this.listContenido = data;
    });
  }


  abrirDetalle (event: any): void {
    console.log ('HOLA ESTO LO HE RECIBIDO DEL HIJO', event);
  }
}
