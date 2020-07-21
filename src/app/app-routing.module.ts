import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'searchPokemon', pathMatch: 'full' },
  { path: 'searchPokemon', component: PokemonSearchComponent },
  { path: 'pokemonDetails', component: PokemonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
