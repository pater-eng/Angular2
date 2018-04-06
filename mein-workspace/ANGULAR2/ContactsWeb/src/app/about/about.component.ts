import { Component, OnInit, Input } from '@angular/core';
import {Contact} from '../../services/contact.service';
import {ContactService} from '../../services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


 @Input() infos : Contact;
  constructor(private route: ActivatedRoute, private contactService: ContactService,public router:Router) { }
  ngOnInit(){
    // 1. ALternative
    const id = + this.route.snapshot.paramMap.get('id');
    console.log("hier ist mein id " + id);
    this.contactService.getContact(id).subscribe(
      infos => this.infos = infos
      // 2.Alternative
      //this.infos = JSON.parse(localStorage.getItem("contact"));
    );
  }
  onChercher(){
   this.router.navigate(['/contacts'])
  }

}
