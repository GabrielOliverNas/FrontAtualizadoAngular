import { PageListarComponent } from './page/page-listar/page-listar.component';
import { PageHomeComponent } from './page/page-home/page-home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCadastrarComponents } from './page/page-cadastrar/page-cadastrar.component';



const routes: Routes = [
  {path: 'home', component: PageHomeComponent},
  {path: 'listar', component: PageListarComponent},
  {path: 'cadastrar', component: PageCadastrarComponents},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
