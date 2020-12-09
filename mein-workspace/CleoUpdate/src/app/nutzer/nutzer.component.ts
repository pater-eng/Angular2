import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {KvzVersicherung, KvzVersicherungService} from '../Services/kvz-versicherung-service';

@Component({
  selector: 'app-nutzer',
  templateUrl: './nutzer.component.html',
  styleUrls: ['./nutzer.component.css']
})
export class NutzerComponent implements OnInit {

 @Input() nutzer;
  // damit werden die Info an Parent geschickt, damit der Nutzer gelöscht wird
  @Output() entfernenVon = new EventEmitter();

  @Input()submittedAlready:boolean;

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


  constructor(public kvzVersicherungService: KvzVersicherungService) { }

  ngOnInit() {
    this.getAnrede();
    this.getBerufgruppe();
    this.getNutzung();
    this.getFamilienstand();
    this.getBezugVN();
  }

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
