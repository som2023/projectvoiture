import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PageclientComponent } from './pageclient/pageclient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VoitureComponent } from './voiture/voiture.component';
import { PageemployeComponent } from './pageemploye/pageemploye.component';

const routes: Routes = [
  {
    path: '', component: AuthentificationComponent
  },
  {
   path: 'login', component: LoginComponent
  },
  {
    path:'home',component: HomeComponent
  },
  {
    path:'navbar',component: NavbarComponent
  },
   {
   path:'pageclient',component: PageclientComponent
   },
  {
    path: 'authentification', component: AuthentificationComponent
  },
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path:'voiture', component: VoitureComponent
  }
  ,
  {
    path:'pageemploye', component: PageemployeComponent
  }
  ,
  {
    path:'**',component: NotFoundComponent
     
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
