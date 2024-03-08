import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBrewingComponent } from './add-brewing.component';

describe('AddBrewingComponent', () => {
  let component: AddBrewingComponent;
  let fixture: ComponentFixture<AddBrewingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBrewingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddBrewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
