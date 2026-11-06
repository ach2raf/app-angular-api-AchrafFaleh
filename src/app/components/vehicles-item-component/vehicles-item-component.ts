import { Component, input, output } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle-list-response';

@Component({
  imports: [],
  selector: 'app-vehicles-item-component',
  styleUrl: './vehicles-item-component.css',
  templateUrl: './vehicles-item-component.html',
})
export class VehiclesItemComponent {

  vehicle=input<Vehicle>();
  vehicleClicked=output<string>();
  id: string='';

  getVehicleId(){
    this.id=this.vehicle()?.url.split("/")[5]!;
    return this.id
  }

  emitVehicleClicked(){
    const id=this.getVehicleId();
    this.vehicleClicked.emit(id);
}
}
