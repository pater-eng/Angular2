import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  routes = [
    //{text: 'Contacts', url: '/about'},
   // {text: 'Liste des Contacts', url: '/contacts'},
    // {text: 'Register', url: '/erstellen-contacts'},
   // {text: 'Gallery', url: '/gallery'},
   // {text: 'home',url: '/home'},
   // {text: 'logout',url: '/logout'}
    // {text: 'login', url: '/login'}

  ]

  constructor(private router: Router) {}
   // diese Methode permet de rendre la Route inactive, lorsk je me situe a l'interieur de celle-ci
  isCurrentRoute(route: string): boolean {
    return this.router.routerState.snapshot.url === route;
  }
}
