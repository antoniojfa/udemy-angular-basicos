import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
      {
        nombre: 'Goku',
        poder: 15000
      },
      {
        nombre: 'Vegeta',
        poder: 8500
      }
    ];

    get personajes() {
      return [...this._personajes];   // Permite romper la referencia directa con el objeto privado _personajes
    }

    constructor(){ }

    agregarPersonaje( personaje: Personaje ) {
      this._personajes.push( personaje );
    }

}