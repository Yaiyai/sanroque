import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'carta', loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule) },
  { path: 'vinos', loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule) },
  { path: 'menu-del-dia', loadChildren: () => import('./components/daymenu/daymenu.module').then(m => m.DaymenuModule) },
  { path: 'contacto', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
