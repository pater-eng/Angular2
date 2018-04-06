import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Contact, ContactService} from '../../services/contact.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'ng-if-else',
  templateUrl: './erstellen-contacts.component.html',
  styleUrls: ['./erstellen-contacts.component.css']
})

export class ErstellenContactsComponent implements OnInit {
  //contact: any;// alternative
  newContact = new Contact();

  constructor( public http: Http, public contactservice: ContactService) {

  }

  ngOnInit() {

  }
  // diese Funktion bekommt alle Daten der Formular
  saveContact(dataForm: Contact){
    this.contactservice.addContacts(this.newContact)
  }

}

