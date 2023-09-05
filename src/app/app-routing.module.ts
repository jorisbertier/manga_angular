import { HomeComponent } from './home-component/home-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaListComponent } from './MangaList';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'manga', component: MangaListComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
