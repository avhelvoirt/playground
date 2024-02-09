import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';

@Component({
  standalone: true,
  imports: [RouterModule, AuthComponent],
  selector: 'playground-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'coffee-science';

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.login('avhelvoirt', 'password').subscribe();
    this.getGrind();
  }

  getGrind() {
    this.http.get('http://localhost:3000/api/grinds').subscribe((data) => {
      console.log(data);
    });
  }
}
