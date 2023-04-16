import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from '../edit/edit.component';
import { PenalitiesComponent } from './penalities/penalities.component';

const routes: Routes = [
  {path:'penalities', component:PenalitiesComponent},
  {path:'penality/edit/:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealestateRoutingModule { }
