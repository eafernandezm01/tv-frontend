import { Routes } from '@angular/router';
import { ListadoContenido } from './page/listado-contenido/listado-contenido';

export const routes: Routes = [
    {path: 'listado-contenido', component: ListadoContenido},
    {path: '', redirectTo:'listado-contenido', pathMatch:'full'}
];
