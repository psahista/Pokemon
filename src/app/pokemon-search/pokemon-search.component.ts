import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
})
export class PokemonSearchComponent implements OnInit {
  allPokemon: any = [];
  name: string;
  randomID: number;
  isSearched = true;
  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.getAllPokemon();
    if (localStorage.getItem('randomId')) {
      this.randomID = parseInt(localStorage.getItem('randomId'));
    }
  }

  getAllPokemon() {
    this.service.getAllPokemon().subscribe(
      (res: any) => {
        console.log(res);
        this.allPokemon = res.results;
        this.findUnique();
      },
      (err) => {
        console.error(err);
      }
    );
  }
  searchPokemon() {
    this.isSearched = false;
    this.service.searchPokName(this.name).subscribe(
      (res) => {
        let tempArr = [];
        tempArr.push(res);
        this.allPokemon = tempArr;
        console.log(res);
      },
      (err) => {
        console.error(err);
      }
    );
  }
  findUnique() {
    let currentDate = localStorage.getItem('currentDate');

    if (!currentDate) {
      let toDay = new Date();
      localStorage.setItem('currentDate', toDay.toJSON().slice(0, 10));
      this.randomID = Math.floor(Math.random() * this.allPokemon.length);

      localStorage.setItem('randomId', this.randomID.toString());
    } else {
      let TempDate = new Date().toJSON().slice(0, 10);
      if (localStorage.getItem('currentDate') != TempDate) {
        this.randomID = Math.floor(Math.random() * this.allPokemon.length);
        localStorage.setItem('randomId', this.randomID.toString());
      }
    }
  }
}
