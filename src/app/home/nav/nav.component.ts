import { Component, HostBinding, effect, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  public curentUser!: UserModel;
  isDarkMode!: boolean;



  buttons: {
    label: string, url: string, icon: string
  }[] = [
      { label: 'Appointments', url: '/appointments', icon: 'heroCalendar' },
      { label: 'New Appointment', url: '/new', icon: 'heroPlus' },
    ]

  constructor(private router: Router) {

  }



  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }

  ngOnInit() {
    this.loadSavedTheme();
    this.curentUser = JSON.parse(localStorage.getItem('user') || '{}');

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

