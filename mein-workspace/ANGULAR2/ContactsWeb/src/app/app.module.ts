import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import {HttpModule} from '@angular/http';
import {ContactService} from '../services/contact.service';
import { ErstellenContactsComponent } from './erstellen-contacts/erstellen-contacts.component';
import {DeleteContactComponent} from './contacts/delete-contacts.component';
import { HttpClientModule }    from '@angular/common/http';
import { BearbeitenComponent } from './bearbeiten/bearbeiten.component';
import { GalleryComponent } from './gallery/gallery.component';
import {UtilsModule} from './utils/utils.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {AuthentificationService} from '../services/authentification.service';
import {AlertService} from '../services/alert.service';
// appRoutes ist die Liste von Routes
const appRoutes: Routes = [
  {path: 'about/:id', component: AboutComponent}, // /about:id= ceci veut dire k about est une route a laquelle je transmet le id.
  {path: 'contacts', component: ContactsComponent},
  {path: 'erstellen-contacts', component: ErstellenContactsComponent},
  {path: 'bearbeiten/:id', component: BearbeitenComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login'}
];
// un module est une klasse ki utilise un decorateur.ICi le decorateur est @NgModule...
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    ErstellenContactsComponent,
    DeleteContactComponent,
    BearbeitenComponent,
    GalleryComponent,
    HomeComponent,
    LoginComponent


  ],
  imports: [
    // forRoot(appRoutes) wird eine Module erzeugt und gleichzeitig zu konfigurieren und alle benötigen Componente für meine Application
    BrowserModule, RouterModule.forRoot(appRoutes), HttpModule,
    FormsModule, HttpClientModule, UtilsModule
  ],
  providers: [ContactService,AuthentificationService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
