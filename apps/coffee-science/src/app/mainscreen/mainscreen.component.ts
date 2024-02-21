import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../shared/components/navbar.component';
import '@playground/playground-ui';
@Component({
  selector: 'playground-mainscreen',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './mainscreen.component.html',
  styleUrl: './mainscreen.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainscreenComponent implements OnInit {
  constructor(private http: HttpClient) {}

  name = 'Goodbye';

  ngOnInit(): void {
    this.getGrind();
  }

  getGrind() {
    this.http.get('http://localhost:3000/api/grinds').subscribe((data) => {
      console.log(data);
    });
  }
}
