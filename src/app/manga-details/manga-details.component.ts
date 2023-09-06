import { Component } from '@angular/core';
import { MangaService } from '../manga-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.css']
})
export class MangaDetailsComponent {

  manga: any;

  constructor(private MangaService: MangaService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const mangaId = +params['id'];
      this.getMangaById(mangaId -1);
    })
  }

  getMangaById(id:number) {
    this.manga = this.MangaService.fetchById(id);
  }
}
