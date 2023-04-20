import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RealestateModule } from './realestate/realestate.module';
import { EditComponent } from './edit/edit.component';
import { ComissionListsComponent } from './comission-lists/comission-lists.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingsComponent } from './bookings/bookings.component';
import { TeamsComponent } from './teams/teams.component';
import { RewardsComponent } from './rewards/rewards.component';
import { PaymentsComponent } from './payments/payments.component';
import { LoaderComponent } from './loader/loader.component';
// import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    EditComponent,
    ComissionListsComponent,
    ProfileComponent,
    BookingsComponent,
    TeamsComponent,
    RewardsComponent,
    PaymentsComponent,
    LoaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RealestateModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
