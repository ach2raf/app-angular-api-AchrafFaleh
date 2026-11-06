import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehiclesListPage } from './components/vehicles-list-page/vehicles-list-page';

@Component({
  imports: [RouterOutlet, VehiclesListPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app-angular-api-AchrafFaleh');
}
