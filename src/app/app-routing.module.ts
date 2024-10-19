import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'carta', loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule) },
  { path: 'vinos', loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule) },
  { path: 'menu-del-dia', loadChildren: () => import('./components/daymenu/daymenu.module').then(m => m.DaymenuModule) },
  { path: 'contacto', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) },
  { path: 'politica', loadChildren: () => import('./components/politica/politica.module').then(m => m.PoliticaModule) },
  { path: 'subvenciones', loadChildren: () => import('./components/subvenciones/subvenciones.module').then(m => m.SubvencionesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
