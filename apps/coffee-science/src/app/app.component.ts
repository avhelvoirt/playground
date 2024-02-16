import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainscreenComponent } from './mainscreen/mainscreen.component';

@Component({
  standalone: true,
  imports: [RouterModule, MainscreenComponent],
  selector: 'playground-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'coffee-science';
}
