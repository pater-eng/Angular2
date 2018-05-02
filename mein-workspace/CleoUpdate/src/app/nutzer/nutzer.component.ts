import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {KvzVersicherungService} from '../Services/kvz-versicherung-service';

@Component({
  selector: 'app-nutzer',
  templateUrl: './nutzer.component.html',
  styleUrls: ['./nutzer.component.css']
})
export class NutzerComponent implements OnInit {

  @Input() nutzerForm: FormGroup;
  // damit werden die Info an Parent geschickt
  @Output() entfernenVon = new EventEmitter();

  selectedAnrede:string;
  anrede:any;

  selectedBerufsgruppe:string;
  berufsgruppe:any;
  selectedFamilienstand:string;
  familienstand:any;
  nutzungen:any;
  selectedNutzung:string;

  bezugVN:any;
  selectedBezugVN:string;

/*  entfernNutzer:string;
  entfernPerson:boolean=true;*/


  constructor(public kvzVersicherungService: KvzVersicherungService) { }

  ngOnInit() {
    this.getAnrede();
    this.getBerufgruppe();
    this.getNutzung();
    this.getFamilienstand();
    this.getBezugVN();
  }

 /* public toggleEntfernePerson(hide){
      this.entfernNutzer = "Nutzer"
    this.entfernPerson = !hide;
  }*/

  public getAnrede(){
    this.kvzVersicherungService.getAnrede().subscribe(data=>{
      this.anrede = data;
      this.selectedAnrede=null;
    })
  }

  public getBerufgruppe(){
    this.kvzVersicherungService.getBerufgruppe().subscribe(data=>{
      this.berufsgruppe = data;
      this.selectedBerufsgruppe=null;
    })
  }

  public getFamilienstand(){
    this.kvzVersicherungService.getFamiliestand().subscribe(data=>{
      this.familienstand = data;
      this.selectedFamilienstand=null;
    })
  }

  public getNutzung(){
    this.kvzVersicherungService.getNutzung().subscribe(data=>{
      this.nutzungen = data;
      this.selectedNutzung = null;
    })
  }

  public getBezugVN(){
    this.kvzVersicherungService.getBezugVN().subscribe(data=>{
      this.bezugVN=data;
      this.selectedBezugVN=null;
    })
  }
}
