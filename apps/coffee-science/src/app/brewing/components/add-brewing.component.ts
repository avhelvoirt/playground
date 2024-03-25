import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import '@playground/playground-ui';

interface brewing {
  name: string;
  shots: number;
  waterTemp: number;
  waterInML: number;
  pullTime: number;
  tasteExperience: number;
  Notes: string;
}

@Component({
  selector: 'playground-add-brewing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-brewing.component.html',
  styleUrl: './add-brewing.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AddBrewingComponent {
  addBrewingForm = new FormGroup({
    name: new FormControl(''),
    // shots: new FormControl(),
    // brewingMethod: new FormControl(),
    // grind: new FormControl(),
    // waterTemp: new FormControl(),
    // waterInML: new FormControl(),
    // pullTime: new FormControl(),
    // tasteExperience: new FormControl(),
    // notes: new FormControl(),
  });

  constructor(private http: HttpClient) {}

  addBrewing() {
    console.log(this.addBrewingForm.value.name);
    // this.http
    //   .post('http://localhost:3000/api/brewings', {
    //     name: 'test espresso',
    //     shots: 1,
    //     brewingMethod: 'Espresso',
    //     coffeeBean: 1,
    //     grind: 1,
    //     waterTemp: 83,
    //     waterInML: 32,
    //     pullTime: 30,
    //     tasteExperience: 4,
    //     notes: 'test coffee delete later',
    //   })
    //   .toPromise()
    //   .then(() => {
    //     alert('Coffee is created');
    //   });
  }
}

//add brewing
//- Name
// - Brewing methode* one
// - Coffee beans* one
// - Grinding* one
//
// - Shots
// - Water Temp
// - waterInML
// - Pull time
// - Taste Experience
// - Notes
