import { Component, OnInit } from '@angular/core';
import { MangaService } from '../manga-service.service';
import { Manga } from '../entities';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent {
  mangaList: Manga[] = [];

  constructor(private service:MangaService) {
  }

  ngOnInit() {
  //  this.getManga();
  }
/*
  getManga() {
    this.mangaList = this.service.fetchAll();
    return this.mangaList;
  }*/
}
