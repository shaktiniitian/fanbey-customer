import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealestateRoutingModule } from './realestate-routing.module';
import { PenalitiesComponent } from './penalities/penalities.component';



@NgModule({
  declarations: [
    PenalitiesComponent,
  ],
  imports: [
    CommonModule,
    RealestateRoutingModule,
  ]
})
export class RealestateModule{ }
