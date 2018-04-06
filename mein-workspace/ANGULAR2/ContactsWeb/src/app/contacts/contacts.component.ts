import { Component, OnInit, Input } from '@angular/core';

import {constructor} from 'events';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Contact, ContactService} from '../../services/contact.service';
import { Validators } from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: []
})
export class ContactsComponent implements OnInit {
  @Input() contact: Contact;
  pageContacts: any;
  suchenWort:string="";
  currentPage:number=0;
  size:number=5;
  totalPages:number;

  // Pagination Tableau de pages
 // pages:Array<number>;// oder nur any;
  pages:any;

  constructor( public http: Http, public contactservice: ContactService, public router:Router) {
 }
  ngOnInit() {
    this.getContacts();
 }
 // Lists alle Contacts
  getContacts(){
    this.contactservice.getContacts().subscribe(data => {
      this.pageContacts = {content:data};
      //this.pages= new Array(data.totalPages);

    }, err => {
      console.log(err);
    });
  }

 // 2 ALternative
 //saveContactLs(contact: Contact) {
   // localStorage.setItem("contact", JSON.stringify(contact).toString());
 // }

  updateContact(contact: Contact){
    this.contactservice.updateContact(this.contact);
  }


  deleteContact(contact: Contact){
    let confirm = window.confirm("are you sure to delete " + contact.nom + "?")
    if (confirm == true) {
      this.contactservice.deleteContact(contact).subscribe(data => {
        this.pageContacts = this.pageContacts.filter(c => c !== contact);
      });
    };
  }

// Diese Funktion ermöglicht das Suchen eines Contacts, wenn man eine Buchstaben im Suchfeld eingibt
  doSearch(){
    this.contactservice.sucheContactNachWort(this.suchenWort, this.currentPage, this.size)
      .subscribe(data => {
      this.pageContacts = data;
      // kan je recois les donnes, j'initialise les pages et je specifie la dimension
      this.pages= new Array(data.totalPages);
    }, err => {
      console.log(err);
    });
  }
  suchen(){
    this.doSearch();
}

  gotoPage(pageNo:number){
    this.currentPage = pageNo;
    this.doSearch();

  }

  // pour bearbeiten un Contact, je fais ceci et j'appel la methode ds le html-Seite le bouton du
  onEditContact(id:number){
    this.router.navigate(['bearbeiten', id]);
  }
}
