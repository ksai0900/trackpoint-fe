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
import { heroArrowLeft, heroArrowLeftOnRectangle, heroArrowRight, heroCalendar, heroCheck, heroCheckCircle, heroLockClosed, heroMoon, heroPlus, heroSun, heroUser } from '@ng-icons/heroicons/outline';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './home/auth/auth.guard';
import { TableComponent } from './util/table/table/table.component';
import { bootstrapSortUp, bootstrapSortDown, bootstrapSortAlphaUp, bootstrapSortAlphaDown, bootstrapFunnel } from '@ng-icons/bootstrap-icons';
import { DatePipe } from '@angular/common';
import { WebsocketService } from './services/WebsocketService';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NewAppointmentComponent,
    AppointmentsComponent,
    LoginComponent,
    TableComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ bootstrapSortUp, bootstrapSortDown, 
      bootstrapSortAlphaUp, bootstrapSortAlphaDown, bootstrapFunnel, 
      heroCheck, heroCheckCircle, heroArrowLeftOnRectangle, 
      heroCalendar, heroPlus, heroMoon, heroSun, heroUser, 
      heroLockClosed, heroArrowRight,  heroArrowLeft}),
  ],
  providers: [
    AuthGuard,
    DatePipe,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
