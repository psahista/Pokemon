import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemonDetails: any = [];
  constructor(private service: PokemonService, private route: Router) {}

  ngOnInit(): void {
    this.getDetails();
  }
  getDetails() {
    this.service.searchPokName(localStorage.getItem('name')).subscribe(
      (res) => {
        this.pokemonDetails = res;
        console.log(res);
      },
      (err) => {
        console.error(err);
      }
    );
  }
  backToHome() {
    this.route.navigate(['/searchPokemon']);
  }
}
