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
import { heroArrowLeftOnRectangle, heroArrowRight, heroCalendar, heroLockClosed, heroMoon, heroPlus, heroSun, heroUser } from '@ng-icons/heroicons/outline';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './home/auth/auth.guard';
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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgIconsModule.withIcons({heroArrowLeftOnRectangle, heroCalendar, heroPlus, heroMoon, heroSun, heroUser, heroLockClosed, heroArrowRight}),
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
