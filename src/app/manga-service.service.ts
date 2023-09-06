import { MANGAS } from './mock-manga';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor() { }


  fetchAll() {
    return MANGAS;
  }

  fetchById(id: number) {
    return MANGAS[id];
  }

}
