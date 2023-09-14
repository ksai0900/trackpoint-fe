import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './home/nav/nav.component';
import { NewAppointmentComponent } from './home/new-appointment/new-appointment.component';
import { AppointmentsComponent } from './home/appointments/appointments.component';
import { LoginComponent } from './login/login.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroCalendar, heroMoon, heroPlus, heroSun } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NewAppointmentComponent,
    AppointmentsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({heroCalendar, heroPlus, heroMoon, heroSun}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
