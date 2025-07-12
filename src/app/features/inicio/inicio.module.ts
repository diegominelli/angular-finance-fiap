import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, InicioRoutingModule, MatListModule, RouterModule],
})
export class InicioModule {}
