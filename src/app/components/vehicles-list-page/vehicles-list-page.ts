
import { Component, inject, OnInit, signal,Input, TemplateRef } from '@angular/core';
import { VehiclesItemComponent } from '../vehicles-item-component/vehicles-item-component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleService } from '../../services/vehicle-service';
import { VehiclesModal } from '../vehicles-modal/vehicles-modal';
import { Vehicle } from '../../interfaces/vehicle-list-response';
@Component({
  imports: [VehiclesItemComponent],
  selector: 'app-vehicles-list-page',
  styleUrl: './vehicles-list-page.css',
  templateUrl: './vehicles-list-page.html',
})
export class VehiclesListPage {

  vehicleService=inject(VehicleService);
  vehicleList=signal<Vehicle[]>([]);
  private modalService=inject(NgbModal);

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe(resp => {
      this.vehicleList.set(resp.results);
    });
  }

  openVehicleModal(id :string){
    this.vehicleService.getOne(id).subscribe(resp => {

          const modalRef = this.modalService.open(VehiclesModal);
		      modalRef.componentInstance.vehicleDetail=resp;
    });
  }
  
  
}


















































