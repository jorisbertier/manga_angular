import { Component, OnInit } from '@angular/core';
import { MangaService } from './manga-service.service';
import { Manga } from './entities';

@Component({
    selector: 'manga-list',
    templateUrl: './manga-list.component.html'
    })

export class MangaListComponent {
    mangaList: Manga[] = [];
    
    constructor(private service:MangaService) {
    }

    ngOnInit() {
        this.getManga();
    }

    getManga() {
        this.mangaList = this.service.fetchAll();
        return this.mangaList;
    }
    }