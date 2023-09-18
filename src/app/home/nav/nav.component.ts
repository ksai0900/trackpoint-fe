import { Component, HostBinding, OnInit, effect, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  public curentUser!: UserModel;
  isDarkMode!: boolean;



  buttons: {
    label: string, url: string, icon: string
  }[] = [];
  constructor(private router: Router) {

  }


  ngOnInit() {
    this.loadSavedTheme();
    this.curentUser = JSON.parse(localStorage.getItem('user') || '{}');


    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      /* this.currentUser = user; */

      if (user.category === 'doctor') {
        this.buttons.push({ label: 'Appointments', url: '/appointments', icon: 'heroCalendar' });
      } else if (user.category === 'secretary') {
        this.buttons.push({ label: 'New Appointment', url: '/new', icon: 'heroPlus' });
      }
    }
  }


  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }




  private loadSavedTheme() {

    const htmlElement = document.documentElement;
    if (localStorage.getItem('theme') === 'dark') {
      htmlElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      this.isDarkMode = true;
    }
    else if (localStorage.getItem('theme') === 'light') {
      htmlElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      this.isDarkMode = false;
    }
  }

  isDarkModeEnabled(): string | null {
    const htmlElement = document.documentElement;
    const dataThemeValue = htmlElement.getAttribute('data-theme');
    return dataThemeValue;
  }

  toggleDarkMode() {
    const htmlElement = document.documentElement;
    let darkMode = this.isDarkModeEnabled();
    if (darkMode?.match('dark')) {
      htmlElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      this.isDarkMode = false;
    } else if (darkMode === null) {
      htmlElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      this.isDarkMode = true;

    }
    else {
      htmlElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      this.isDarkMode = true;

    }
  }

}

