import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}
  searchPokName(name: string) {
    const URL = environment.baseURL + 'pokemon/' + name;
    return this.http.get(URL);
  }
  getAllPokemon() {
    const URL = environment.baseURL + 'pokemon';
    return this.http.get(URL);
  }
}
