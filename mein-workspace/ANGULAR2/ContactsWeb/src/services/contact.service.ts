import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {AuthentificationService} from './authentification.service';

export  class Contact {
  id: number;
  nom : string;
  prenom: string;
  dateNaissance: Date;
  email:string;
  tel:number;
  photo:string;
  password:string;
}


@Injectable()
export class ContactService {
  constructor(public  http: Http, private httpClient: HttpClient, private authenticationService: AuthentificationService) {
  }

  public getContacts() {
    return this.http.get( 'http://192.168.99.100:8007/contacts')
    .map(resp => resp.json());


  }
  public getContact(id: number){
    return this.http.get('http://192.168.99.100:8007/contacts/' + id)
      .map(resp=>resp.json());
  }

  public addContacts(contact){
    // avec Post: senden das Request und subscribe: wird das Reponse des Requests mit Hilfe von data ankommen.
    console.log('Contact ist da! ' + JSON.stringify(contact));
       return this.http.post('http://192.168.99.100:8007/saveContacts',contact)
         .subscribe(data =>{
            console.log(data);
    }, err => console.log("Could not create contact."));
  }

  public deleteContact(contact){
    return this.http.delete('http://192.168.99.100:8007/contacts/' + contact.id);

  }

  public updateContact(contact: Contact){
    // put: envoit de la requete
    // map: recoit la response de la requete
    return this.http.put('http://192.168.99.100:8007/contacts/' + contact.id, contact)
      .map(resp=>resp.json());

  }

  public sucheContactNachWort(sucheWort:string, page:number, size:number){
    return this.http
      .get( 'http://192.168.99.100:8007/chercherContacts?mc=' + sucheWort + '&page=' + page + '&size' + size)
      .map(resp => resp.json());

  }
}
