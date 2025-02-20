import { Component } from '@angular/core';

@Component({
  selector: 'app-hearder',
  standalone: false,
  templateUrl: './hearder.component.html',
  styleUrl: './hearder.component.css'
})
export class HearderComponent {
  imagenUrl: string = 'escudo.png'; // Ruta de la imagen en "assets"

}
