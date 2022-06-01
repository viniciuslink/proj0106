import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CachorrosComponent } from './cachorros/cachorros.component';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './clientes/formulario/formulario.component';

const routes: Routes = [
{
  path:'',
  component: HomeComponent
},
{
  path: 'cachorros',
  component: CachorrosComponent
},
{
  path:'formulario',
  component: FormularioComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
