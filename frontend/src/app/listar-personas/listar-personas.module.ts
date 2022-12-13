import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarPersonasPageRoutingModule } from './listar-personas-routing.module';

import { ListarPersonasPage } from './listar-personas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPersonasPageRoutingModule
  ],
  declarations: [ListarPersonasPage]
})
export class ListarPersonasPageModule {}
