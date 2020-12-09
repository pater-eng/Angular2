import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IMultiSelectOption} from 'angular-2-dropdown-multiselect';
import {KvzVersicherung, KvzVersicherungService} from '../Services/kvz-versicherung-service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-kvz-versicherung',
  templateUrl: './kvz-versicherung.component.html',
  styleUrls: ['./kvz-versicherung.component.css']
})
export class KvzVersicherungComponent implements OnInit {

   kvzVersicherung = new KvzVersicherung();

  geschaeftsvorfall: any;
  selectedGeschaefsvorfall: string;

  versicherungsnehmern: any;
  selectedVersicherungsnehmern: string;

  zahlweise:any;
  selectedZahlweise:string;

  zahlweiseneuvertraege:any;
  selectedgetZahlweiseneuvertraege:string;

  selectedBrancheVN:string;
  brancheVN:any;

  selectedBerufsgruppe:string;
  berufsgruppe:any;

  selectedFahrzeughalter:string;
  fahrzeughalter:any;


  kuendigung:any;
  selectedKuendigung:string;


  neuvertrag: boolean = false;
  vertragsart:string = "Bestehender Vertrag";

  tarifgruppe:any;
  selectedtarifgruppe:boolean=false;


  fahrzeuhalterKindChoice: string;
  submittedAlready:boolean; // mit dieser Validator wird den Vater an seiner Kinder den Bescheid weitergeben.



  constructor( private router: Router, public kvzVersicherungService: KvzVersicherungService, private fb: FormBuilder ) {

  }

  changed() {
    console.log('in parent + versichNehm: ', this.kvzVersicherung.versicherungsnehmer);
    console.log('in parent +  GesschVor: ', this.kvzVersicherung.geschaeftsvorfall);
    console.log('in parent + NeuVertrag: ', this.kvzVersicherung.vertragsbeginnNeuvertrag);
    console.log('in parent + scheinNr: ', this.kvzVersicherung.bestehenderVertrag.versicherungscheinNr);
    console.log('in parent + gesellschaft: ', this.kvzVersicherung.bestehenderVertrag.versicherungsgesellschafte_ein);
    console.log('schadensfreiheitsrabatt_Haftpflicht_ein: ', this.kvzVersicherung.deckungsumfang.schadensfreiheitsrabatt_Haftpflicht_ein);
  }


  datefeld(ev: Event){
    console.log("DATUM"+ ev);
  }

  // Bei der Auswahl des Combobox wird neues Mask angezeigt

  fahrzeuhalterKind(choice :string){
    console.log(choice);
    switch(choice){

      case 'Versicherungsnehmer': this.fahrzeuhalterKindChoice = null; break;
      case 'Ehepartner in häuslicher Gemeinschaft': this.fahrzeuhalterKindChoice = choice;  break;
      case 'Lebenspartner in häuslicher Gemeinschaft':this.fahrzeuhalterKindChoice = choice;  break;
      case 'behindertes Kind':this.fahrzeuhalterKindChoice = choice;  break;
      case 'Sonstiges':this.fahrzeuhalterKindChoice = choice; ; break;
      case 'Firmeninhaber':  this.fahrzeuhalterKindChoice = choice;  break;
      case 'Firma':  this.fahrzeuhalterKindChoice = choice;  break;
      case 'behinderter Elternteil des VN':this.fahrzeuhalterKindChoice = choice;  break;
      case 'Werksangehöriger eines Autoherstellers/-importeurs':this.fahrzeuhalterKindChoice = choice;  break;
      case 'Leasinggeber':this.fahrzeuhalterKindChoice = choice; break;

      default: ;
    }
  }

  ngOnInit() {

    this.getVersicherungsnehmern();
    this.getGeschaefstvorfall();
    this.getZahlweiseneuvertraege();
    this.getKuendigung();
    this.getTarifgruppe();
    this.getBrancheVN();
    this.getBerufgruppe();
    this.getFahrzeughalter();

  }

  // Save Formular
  public saveKfzVersicherung (kvzversicherungForm: NgForm){
    this.submittedAlready = true;
    this.kvzVersicherungService.saveKfzVersicherung(this.kvzVersicherung);
    console.log('versicherungsnehmenr: ', this.kvzVersicherung.versicherungsnehmer);
    console.log('vorfall: ',this.kvzVersicherung.geschaeftsvorfall);
    console.log('Neuvertag: ',this.kvzVersicherung.vertragsbeginnNeuvertrag);
    console.log('scheinNr: ',this.kvzVersicherung.bestehenderVertrag.versicherungscheinNr);
    console.log('Versicherungsgesellschaft: ',this.kvzVersicherung.bestehenderVertrag.versicherungsgesellschafte_ein);
    console.log('Beitrag: ',this.kvzVersicherung.bestehenderVertrag.beitragBrutto);
    console.log('schadensfreiheitsrabatt_Haftpflicht_ein: ', this.kvzVersicherung.deckungsumfang.schadensfreiheitsrabatt_Haftpflicht_ein);
    console.log('kennzeichen: ', this.kvzVersicherung.fahrzeugAngaben.kennzeichen1);
    console.log('zulassung: ', this.kvzVersicherung.fahrzeugAngaben.erstzulassungsdatum);
    console.log('nutzung: ', this.kvzVersicherung.nutzerProfil.nutzung_ein);
    console.log('nutzung: ', this.kvzVersicherung.nutzerProfil.nutzer.anrede_ein);
    console.log('FahrzeugHalter: ', this.kvzVersicherung.fahrzeughalter_ein);
    console.log('Vorname: ', this.kvzVersicherung.fahrzeugKind.vorname);
    console.log('Nachname: ', this.kvzVersicherung.fahrzeugKind.nachname);
  }

  public toggleNeuvertrag(neuvertrag){
    (neuvertrag)? this.vertragsart = "Neuvertrag" : this.vertragsart = "Bestehender Vertrag";
    this.neuvertrag = neuvertrag;
  }

  public getVersicherungsnehmern() {
    this.kvzVersicherungService.getVersicherunsnehmern().subscribe(data => {
      this.versicherungsnehmern = data;
      this.selectedVersicherungsnehmern = null;
    }, err =>{
      console.log(err);
    });
  }

  public getGeschaefstvorfall(){
    return this.kvzVersicherungService.getGeschaefstvorfaelle().subscribe(data =>{
      this.geschaeftsvorfall = data;
      this.selectedGeschaefsvorfall = null;
    },err =>{
      console.log(err);
    });
  }

  public getZahlweiseneuvertraege(){
    return this.kvzVersicherungService.getZahlweiseneuvertraege().subscribe(data=>{
      this.zahlweiseneuvertraege = data;
      this.selectedgetZahlweiseneuvertraege = null;
    })
  }
  public getKuendigung(){
    this.kvzVersicherungService.getKuendigung().subscribe(data=>{
      this.kuendigung = data;
      this.selectedKuendigung= null;
    })
  }

  public getTarifgruppe(){
    this.kvzVersicherungService.getTarifgruppe().subscribe(data=>{
      this.tarifgruppe = data;
      this.selectedtarifgruppe=null;
    })
  }

  public getZahlweise(){
    this.kvzVersicherungService.getZahlweise().subscribe(data=>{
      this.zahlweise = data;
      this.selectedZahlweise=null;
    })
  }
  public getBrancheVN(){
    this.kvzVersicherungService.getBrancheVN().subscribe(data=>{
      this.brancheVN = data;
      this.selectedBrancheVN=null;
    })
  } public getBerufgruppe(){
    this.kvzVersicherungService.getBerufgruppe().subscribe(data=>{
      this.berufsgruppe = data;
      this.selectedBerufsgruppe=null;
    })
  }
  public getFahrzeughalter(){
    this.kvzVersicherungService.getFahrzeughalter().subscribe(data=>{
      this.fahrzeughalter = data;
      this.selectedFahrzeughalter=null;
    })
  }

}
