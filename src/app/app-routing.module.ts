import { HomeComponent } from './home-component/home-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaListComponent } from './MangaList';
import { Error404Component } from './error404/error404.component';
import { MangaDetailsComponent } from './manga-details/manga-details.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ContactComponent } from './contact/contact.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'manga', component: MangaListComponent},
  {path: 'manga/:id', component: MangaDetailsComponent},
  {path: 'user/:id', component: UserDetailsComponent},
  {path: 'user', component: UserComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contactReactive', component: ContactReactiveComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
