import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact, ContactService} from '../../services/contact.service';


@Component({
  selector: 'app-bearbeiten',
  templateUrl: './bearbeiten.component.html',
  styleUrls: ['./bearbeiten.component.css']
})
export class BearbeitenComponent implements OnInit {
  @Input() bearbeiten : Contact;


  idContact:number;

  // ActivatedRoute me donne la route activée
  constructor(private route: ActivatedRoute, private contactService: ContactService, private router: Router) {
    console.log(route.params);
  }

  ngOnInit(){
    this.onUpdateContact();

  }
  // pour bearbeiten un Contact, je fais ceci . Je merken le id et j'envois le Requet o server.
  // Si celui ci me renvois une Reponse, je vais la merken dans le Contact(this.bearbeiten=data)
onUpdateContact(){
  this.idContact = + this.route.snapshot.params['id'];
  console.log("hier ist mein id " + this.idContact);
  this.contactService.getContact(this.idContact).subscribe(
    bearbeiten => this.bearbeiten = bearbeiten

  );
}

  updateContact():void{
   this.contactService.updateContact(this.bearbeiten).subscribe(data=>{
       alert("Contact wurde updated!")
       this.bearbeiten = data;
       this.router.navigate(['/contacts']);

   },err=>{
      console.log(err);
    });
 }
}
