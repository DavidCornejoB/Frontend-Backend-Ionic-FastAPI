import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarPersonasPage } from './listar-personas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarPersonasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarPersonasPageRoutingModule {}
