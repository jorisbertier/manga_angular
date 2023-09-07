import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MangaListComponent } from './MangaList';
import { Error404Component } from './error404/error404.component';
import { MangaDetailsComponent } from './manga-details/manga-details.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ModalComponent } from './modal/modal.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MangaListComponent,
    Error404Component,
    MangaDetailsComponent,
    UserComponent,
    UserDetailsComponent,
    ModalComponent,
    ContactComponent,
    ContactReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
