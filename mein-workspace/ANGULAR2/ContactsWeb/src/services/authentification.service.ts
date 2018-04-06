import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {Contact} from './contact.service';
import {toBase64String} from '@angular/compiler/src/output/source_map';
import {Http} from '@angular/http';
import { Headers,RequestOptions} from '@angular/http';
import {map} from 'rxjs/operators';


@Injectable()
export class AuthentificationService {

  contact: any;
  authenticated: boolean;
  constructor(private http: Http) { }

 login(nom: string, password: string){

    let myheaders = new Headers();
    myheaders.append('Accept', 'application/json')
    // creating base64 encoded String from user name and password
    var base64Credential: string = btoa( nom+ ':' + password);
    myheaders.append("Authorization", "Basic " + base64Credential);

    let options = new RequestOptions() ;
    options.headers = myheaders

      return this.http.post('http://192.168.99.100:8007/login',{nom,  password}, options)
        .map(resp => resp);
    }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}

