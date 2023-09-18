import { Component } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

 


  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {

  }



  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.maxLength(128)]),
    role: new FormControl('doctor', [Validators.required]),
  });

  onSubmit(): void {
    this.loginService.login(this.loginForm.value).subscribe(
      {
        next: (user: any) => {
          localStorage.setItem('user', JSON.stringify(user));
          console.log("user ", user);
          if(user.category === "doctor"){
            this.router.navigate(['/appointments']);
          } else {
            this.router.navigate(['/new']);
          }

        },
        error: (error: any) => {
          alert('Login failed')
          console.log("error ", error);
        }
      }
    );

  }

  ngOnInit() {
    this.loadSavedTheme();
  }

  private loadSavedTheme() {
    const htmlElement = document.documentElement;
    if (localStorage.getItem('theme') === 'dark') {
      htmlElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else if (localStorage.getItem('theme') === 'light') {
      htmlElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
