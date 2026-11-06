import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiclesModal } from './vehicles-modal';

describe('VehiclesModal', () => {
  let component: VehiclesModal;
  let fixture: ComponentFixture<VehiclesModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiclesModal],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclesModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
