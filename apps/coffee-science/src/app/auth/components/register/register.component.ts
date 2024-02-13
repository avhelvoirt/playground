import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'playground-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    retypedPassword: new FormControl(''),
  });

  constructor(private router: Router, private authService: AuthService) {}

  register() {
    const formValue = this.registerForm.value;

    this.authService
      .register(
        formValue.username ?? '',
        formValue.email ?? '',
        formValue.password ?? '',
        formValue.retypedPassword ?? ''
      )
      .then(() => {
        this.login();
      })
      .catch((error) => {
        alert('something went wrong');
      });
  }

  login() {
    this.router.navigate(['login']).then();
  }
}
