import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../servicios/pokemon.service';
import { Pokemon } from '../../modelos/pokemon';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  private _pokemonService: PokemonService;
  public pokemons: Pokemon[] = [];

  constructor(pokemonService: PokemonService) {
    this._pokemonService = pokemonService;
  }

  public ngOnInit(): void {
    this._pokemonService.getList().subscribe((data: any) => {
      let {count, next, previous, results} = data;
      console.log(data);
      this.pokemons = results;
    });
  }
  public getImagenByPokemon(pokemon: Pokemon): string {
    const urlImage ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const urlSplited = pokemon.url.split('/');
    const id = urlSplited[urlSplited.length - 2];
    return urlImage + "/" + id + ".png";
  }
}
