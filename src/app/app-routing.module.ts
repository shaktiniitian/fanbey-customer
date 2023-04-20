import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { ComissionListsComponent } from './comission-lists/comission-lists.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProfileComponent } from './profile/profile.component';
import { RewardsComponent } from './rewards/rewards.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'comissions', component:ComissionListsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'bookings', component:BookingsComponent},
  // {path:'edit', component:EditComponent}
  {path:'teams', component:TeamsComponent},
  {path:'rewards', component:RewardsComponent},
  {path:'payments', component:PaymentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
