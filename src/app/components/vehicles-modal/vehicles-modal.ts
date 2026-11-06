import { Component, inject, Input } from '@angular/core';
import { VehicleDetailResponse } from '../../interfaces/vehicle-detail-response';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [],
  selector: 'app-vehicles-modal',
  styleUrl: './vehicles-modal.css',
  templateUrl: './vehicles-modal.html',
})
export class VehiclesModal {
  activeModal=inject(NgbActiveModal);
  @Input() vehicleDetail:VehicleDetailResponse | undefined;

}
