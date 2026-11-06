import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiclesItemComponent } from './vehicles-item-component';

describe('VehiclesItemComponent', () => {
  let component: VehiclesItemComponent;
  let fixture: ComponentFixture<VehiclesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiclesItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclesItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
