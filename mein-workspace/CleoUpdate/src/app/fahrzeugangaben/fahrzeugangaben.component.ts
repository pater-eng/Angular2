import {Component, Input, OnInit} from '@angular/core';
import {KvzVersicherung, KvzVersicherungService} from '../Services/kvz-versicherung-service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-fahrzeugangaben',
  templateUrl: './fahrzeugangaben.component.html',
  styleUrls: ['./fahrzeugangaben.component.css']
})
export class FahrzeugangabenComponent implements OnInit {

  @Input()fahrzeuganbagen;

  selectedZulassungsbezirk:string;
  zulassungsbezirk:any;
  selectedErstbesitz:string;
  erstbesitz:any;

  @Input()submittedAlready:boolean;

  constructor(public kvzVersicherungService: KvzVersicherungService) { }

  ngOnInit() {
    this.getErstbesitz();
    this.getZulassungsberzirk();
  }

  public getZulassungsberzirk(){
    this.kvzVersicherungService.getZulassungsberzirk().subscribe(data=>{
      this.zulassungsbezirk=data;
      this.selectedZulassungsbezirk=null;
    })
  }
  public getErstbesitz(){
    this.kvzVersicherungService.getErstbesitz().subscribe(data=>{
      this.erstbesitz=data;
      this.selectedErstbesitz=null;
    })
  }

}
