import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MangaListComponent } from './MangaList';
import { Error404Component } from './error404/error404.component';
import { MangaDetailsComponent } from './manga-details/manga-details.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MangaListComponent,
    Error404Component,
    MangaDetailsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
