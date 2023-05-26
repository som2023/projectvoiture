import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FooterComponent } from './footer/footer.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { LoginComponent } from './login/login.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PageclientComponent } from './pageclient/pageclient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VoitureComponent } from './voiture/voiture.component';
import { PageemployeComponent } from './pageemploye/pageemploye.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    PresentationComponent,
    FooterComponent,
    CarousselComponent,
    LoginComponent,
    AuthentificationComponent,
    PageclientComponent,
    DashboardComponent,
    VoitureComponent,
    PageemployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
