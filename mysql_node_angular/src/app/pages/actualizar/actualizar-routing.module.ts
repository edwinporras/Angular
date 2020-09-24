import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarComponent } from './actualizar.component';

const routes: Routes = [{ path: '', component: ActualizarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActualizarRoutingModule { }
