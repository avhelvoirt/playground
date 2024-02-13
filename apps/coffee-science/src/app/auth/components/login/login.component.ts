import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'playground-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService
      .login(
        this.loginForm.value.email ?? '',
        this.loginForm.value.password ?? ''
      )
      .then((res) => {
        this.router.navigate(['mainscreen']).then();
      })
      .catch((error) => {
        alert(`${error.status} ${error.statusText}`);
      });
  }

  register() {
    this.router.navigate(['register']).then();
  }
}
