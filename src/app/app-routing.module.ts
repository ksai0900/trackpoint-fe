import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppointmentsComponent } from './home/appointments/appointments.component';
import { NewAppointmentComponent } from './home/new-appointment/new-appointment.component';
import { AuthGuard } from './home/auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], component: HomeComponent,
    children: [
      { path: 'appointments', canActivate: [AuthGuard],component: AppointmentsComponent },
      { path: 'new', canActivate: [AuthGuard],component: NewAppointmentComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
