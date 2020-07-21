import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() message;
  constructor(private route: Router) {}

  ngOnInit(): void {}
  seeDetails() {
    console.log(this.message.name);
    localStorage.setItem('name', this.message.name);
    this.route.navigate(['/pokemonDetails']);
  }
}
