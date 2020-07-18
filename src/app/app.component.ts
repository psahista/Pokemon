import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  allPokemon: any = [];
  name: string;
  constructor(private service: PokemonService) {}

  ngOnInit() {
    this.getAllPokemon();
  }
  getAllPokemon() {
    this.service.getAllPokemon().subscribe(
      (res: any) => {
        console.log(res);
        this.allPokemon = res.results;
      },
      (err) => {
        console.error(err);
      }
    );
  }
  searchPokemon() {
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
}
