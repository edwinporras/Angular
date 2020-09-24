import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearRoutingModule } from './crear-routing.module';
import { CrearComponent } from './crear.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CrearComponent],
  imports: [
    CommonModule,
    CrearRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class CrearModule { }
