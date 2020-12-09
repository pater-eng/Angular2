import {Component, Input, OnInit} from '@angular/core';
import {KvzVersicherung, KvzVersicherungService} from '../Services/kvz-versicherung-service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-nutzerprofil',
  templateUrl: './nutzerprofil.component.html',
  styleUrls: ['./nutzerprofil.component.css']
})
export class NutzerprofilComponent implements OnInit {


  nutzerprofil= new KvzVersicherung();

  @Input()submittedAlready:boolean;



  nutzungen:any;
  selectedNutzung:string;
  nutzerkreis:any;
  selectedNutzerkreis:string;
  abstellplaetze:any;
  selecetedAbstellplaetze:string;
  wohneigentueme:any;
  selectedWohneigentueme:string;
  finanzierungsarte:any;
  selectedFinanzierungsarte:string;
  nutzung_im_Ausland:any;
  selectedNutzung_im_Ausland:string;

  weiterPersonen: any[] = [];

  @Input() nutzerProfil;


  constructor(private kvzVersicherungService: KvzVersicherungService) { }


  ngOnInit() {
    this.getNutzung();
    this.getNutzerkreis();
    this.getAbstellplaetze();
    this.getWohneigentueme();
    this.getFinanzierungsarte();
    this.getNutzung_im_Ausland();
  }

  valeur:boolean;
  valeurChange(ev:boolean){
    this.valeur=ev;
  }

  public getNutzung(){
    this.kvzVersicherungService.getNutzung().subscribe(data=>{
      this.nutzungen=data;
      this.selectedNutzung = null;
    })
  }
  public getNutzerkreis(){
    this.kvzVersicherungService.getNutzerkreis().subscribe(data=>{
      this.nutzerkreis=data;
      this.selectedNutzerkreis = null;
    })
  }
  public getAbstellplaetze(){
    this.kvzVersicherungService.getAbstellplaetze().subscribe(data=>{
      this.abstellplaetze=data;
      this.selecetedAbstellplaetze = null;
    })
  }
  public getWohneigentueme(){
    this.kvzVersicherungService.getWohneigentueme().subscribe(data=>{
      this.wohneigentueme=data;
      this.selectedWohneigentueme = null;
    })
  }
  public getFinanzierungsarte(){
    this.kvzVersicherungService.getFinanzierungsarte().subscribe(data=>{
      this.finanzierungsarte=data;
      this.selectedFinanzierungsarte = null;
    })
  }
  public getNutzung_im_Ausland(){
    this.kvzVersicherungService.getNutzung_im_Ausland().subscribe(data=>{
      this.nutzung_im_Ausland=data;
      this.selectedNutzung_im_Ausland = null;
    })
  }

  public hinzufuegenWeiterPerson(){
    this.weiterPersonen.push("");

  }

  public entferne(person){
    // alternative
     /*this.kvzVersicherungService.delete(person);*/
    this.weiterPersonen.splice(person);
  }

}
