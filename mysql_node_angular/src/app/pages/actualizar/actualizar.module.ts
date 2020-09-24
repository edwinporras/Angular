import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActualizarRoutingModule } from './actualizar-routing.module';
import { ActualizarComponent } from './actualizar.component';


@NgModule({
  declarations: [ActualizarComponent],
  imports: [
    CommonModule,
    ActualizarRoutingModule
  ]
})
export class ActualizarModule { }
