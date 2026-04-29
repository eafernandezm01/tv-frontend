import { Component, OnInit } from '@angular/core';
import { IContenido } from '../../model/IContenido';
import { PlataformaService } from '../../services/plataforma-service';


// ConosoleNinja (extension)
@Component({
  selector: 'app-listado-contenido',
  imports: [],
  templateUrl: './listado-contenido.html',
  styleUrl: './listado-contenido.css',
})
export class ListadoContenido implements OnInit{
  listContenido!: IContenido[];

  constructor (private plataformaService: PlataformaService ){}


  ngOnInit (): void{
    this.plataformaService.getListadoContenido().subscribe((data) => {
      console.log (data);

    })
  }


}
