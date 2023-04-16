import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { ComissionListsComponent } from './comission-lists/comission-lists.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'comissions', component:ComissionListsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'bookings', component:BookingsComponent},
  // {path:'edit', component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
