import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-cocteles',
  standalone: true,  // Esto indica que el componente es standalone
  imports: [NgForOf],
  templateUrl: './cocteles.component.html',
  styleUrls: ['./cocteles.component.css']
})
export class CoctelesComponent implements OnInit {
  cocktails: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .subscribe({
        next: (data) => {
          this.cocktails = data.drinks;
        },
        error: (error) => {
          console.error('Error al obtener cócteles:', error);
        }
      });
  }
}
