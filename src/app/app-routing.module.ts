import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorialComponent } from './components/historial/historial.component';
import { HomeComponent } from './components/home/home.component';
import { PorCobrarComponent } from './components/por-cobrar/por-cobrar.component';


const routes: Routes = [
  {component:HomeComponent,path:'nuevo'},
  {component:PorCobrarComponent,path:''},
  {component:HistorialComponent,path:'historial'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
