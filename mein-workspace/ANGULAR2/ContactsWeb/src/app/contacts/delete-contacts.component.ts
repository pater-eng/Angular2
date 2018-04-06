import { Component, OnInit } from '@angular/core';
import {Contact, ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contacts.component.html'

})
export class DeleteContactComponent implements OnInit {

contact : Contact[];
  constructor(private contactService: ContactService) {

}

  ngOnInit() {
  }
  deleteContact(contact: Contact){
    this.contactService.deleteContact(contact).subscribe(data =>{
    this.contact=this.contact.filter(c => c!== contact);
    });
  };

}

