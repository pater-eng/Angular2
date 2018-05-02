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

  versicherungForm:FormGroup;

  fahrzeuhalterKindChoice: string;


  constructor( private router: Router, public kvzVersicherungService: KvzVersicherungService, private fb: FormBuilder ) {
        this.createForm();
  }



  // Bei der Auswahl des Combobox wird neues Mask angezeigt

  fahrzeuhalterKind(choice :string){

    switch(choice){

      case 'Versicherungsnehmer': this.fahrzeuhalterKindChoice = null; break;
      case 'Ehepartner in häuslicher Gemeinschaft': this.fahrzeuhalterKindChoice = choice; break;
      case 'Lebenspartner in häuslicher Gemeinschaft':this.fahrzeuhalterKindChoice = choice; break;
      case 'behindertes Kind':this.fahrzeuhalterKindChoice = choice; break;
      case 'Sonstige':this.fahrzeuhalterKindChoice = choice; break;
      case 'Firma':  this.fahrzeuhalterKindChoice = choice; break;
      case 'behinderter Elternteil des VN':this.fahrzeuhalterKindChoice = choice; break;
      case 'Werksangehöriger eines Autoherstellers/-importeurs':this.fahrzeuhalterKindChoice = choice; break;

      default:  ;
    }
  }

 // BAS: wenn ich Validators.required wegmache, werden die Validierung("Wert erfoderlich") das jeweilige Feld nicht mehr angezeigt

  createForm() {
    this.versicherungForm = this.fb.group( {
      versicherungsnehmernGroup:this.kvzVersicherung.versicherungsnehmern,
      geschaeftsvorfallGroup:[this.kvzVersicherung.geschaeftsvorfall, Validators.compose([Validators.required ])],
      vertragsbeginnNeuvertragGroup:[this.kvzVersicherung.vertragsbeginnNeuvertrag,Validators.required],
      fuehrerscheindatumVNGroup:[this.kvzVersicherung.fuehrerscheindatum,Validators.required],
      zahlweiseNeuvertragGroup:[this.kvzVersicherung.zahlweiseneuvertraege,Validators.required],
      tarifgruppeGroup:[this.kvzVersicherung.tarifgruppe,Validators.required],
      brancheVNGroup:[this.kvzVersicherung.brancheVN,Validators.required],
      berufsgruppeVNGroup:[this.kvzVersicherung.berufsgruppe,Validators.required],
      fahrzeughalterGroup:[this.kvzVersicherung.fahrzeughalter,Validators.required],
      einzugsermaechtigungsverfahrenGroup:[this.kvzVersicherung.einzugsermaechtigungsverfahren,Validators.required],
      eVBueErstellungVersichererGroup:[this.kvzVersicherung.eVBueErstellungVersicherer,Validators.required],
      eVBErstelltGroup: [this.kvzVersicherung.eVBErstellt,Validators.compose([Validators.required ])],

      bestehenderVertragGroup : this.fb.group({
        versicherungsgesellschaftGroup:[this.kvzVersicherung.versicherungsgesellschafte,Validators.required],
        versicherungscheinNrGroup: [this.kvzVersicherung.versicherungscheinNr,Validators.required],
        vertragsbeginnGroup:[this.kvzVersicherung.vertragsbeginn,Validators.required],
        vertragsendeGroup:[this.kvzVersicherung.vertragende,Validators.required],
        beitragBruttoGroup:[this.kvzVersicherung.beitragBrutto,Validators.required],
        zahlweiseGroup : [this.kvzVersicherung.zahlweise],
        kuendigungGroup:[this.kvzVersicherung.kuendigung, Validators.required],
        versicherungsgesellschaftAnschreiben:[this.kvzVersicherung.versicherungsgesellschaftAnschreiben,Validators.required]
      }),

      deckungsumfangGroup: this.fb.group({
        schadensfreiheitsrabattHaftpflichtGroup:[this.kvzVersicherung.schadensfreiheitsrabatte,Validators.required],
        sFRegelungGroup:[this.kvzVersicherung.sFRegelung],
        kaskoSelbstbeteiligungGroup:[this.kvzVersicherung.kasko_und_selbstbeteiligungen,Validators.required],
        deckungssummenKfzHaftpflichtGroup:[this.kvzVersicherung.deckungssummer_in_derk_kfz_haftpflicht],
        schutzbriefleistungenGroup:[this.kvzVersicherung.schutzbriefleistungen],
        verbesserteZweitwagenregelungPKWGroup:[this.kvzVersicherung.verbesserte_zweitwagenregelegung_fuer_pkw],
        rabattschutzGroup:[this.kvzVersicherung.rabattschutz],
        rabattretterPKWGroup:[this.kvzVersicherung.rabattretter_fuer_pkw],
        fahrerschutzGroup:[this.kvzVersicherung.fahrerschutz],
        werkstattbindungGroup:[this.kvzVersicherung.werksattbindungen],
        auslandsschutzGroup:[this.kvzVersicherung.werksattbindungen],
        rabattuebertragunggroup:[this.kvzVersicherung.rabattuebertragungen],
        mallorcapoliceGroup:[this.kvzVersicherung.mallorcapolice],
        gAPDeckungGroup:[this.kvzVersicherung.gap_deckung],
      }),

      fahrzeuganbagenGroup:this.fb.group({
        kennzeichen1_Group:[this.kvzVersicherung.kennzeichen1,Validators.required],
        kennzeichen2_Group:[this.kvzVersicherung.kennzeichen2,Validators.required],
        kennzeichen3_Group:[this.kvzVersicherung.kennzeichen3,Validators.required],
        zulassungsbezirkGroup:[this.kvzVersicherung.zulassungsbezirk,Validators.required],
        erstzulassungsdatumGroup:[this.kvzVersicherung.erstzulassungsdatum,Validators.required],
        datumFahrzeugerwerbsGroup:[this.kvzVersicherung.datumFahrzeugerwerb,Validators.required],
        erstbesitzGroup:[this.kvzVersicherung.erstbesitz,Validators.required],
        kFZSuchfeldGroup:[this.kvzVersicherung.kFZSuchfeld,Validators.required],
        herstellerNrGroup:[this.kvzVersicherung.herstellerNr,Validators.required],
        typschluesselNrGroup:[this.kvzVersicherung.typschluesselNr,Validators.required],
        fahrzeugmarkeGroup:[this.kvzVersicherung.fahrzeugmarke,Validators.required],
        fahrzeugtypGroup:[this.kvzVersicherung.fahrzeugtyp,Validators.required],
        fahrgestellNrGroup:[this.kvzVersicherung.fahrgestellNr,Validators.required],
        aktuellerKilometerstandGroup:[this.kvzVersicherung.aktuellerKilometerstand,Validators.required],
        fahrzeugneuwertGroup:[this.kvzVersicherung.fahrzeugneuwert,Validators.required],
        derzeitigerFahrzeugwertGroup:[this.kvzVersicherung.derzeitigerFahrzeugwert,Validators.required],
        sonderausstattungenGroup:[this.kvzVersicherung.sonderausstattungen,Validators.required],
      }),

      nutzungprofilGroup:this.fb.group({
        nutzungGroup:[this.kvzVersicherung.nutzungen,Validators.required],
        jaehrlicheFahrleistungGroup:[this.kvzVersicherung.jaehrlicheFahrleistung,Validators.required],
        nutzerkreisGroup:[this.kvzVersicherung.nutzerkreise,Validators.required],
        vnHauptnutzerGroup:[this.kvzVersicherung.vnHauptnutzer,Validators.required],
        vnFahrerGroup:[this.kvzVersicherung.vnFahrer, Validators.required],
        begleitetesFahrerVNGroup:[this.kvzVersicherung.begleitetesFahrer,Validators.required],
        eintragVerkehrszentralregisterGroup:[this.kvzVersicherung.eintragVerkehrszentralregister,Validators.required],
        zweitwagenGroup:this.kvzVersicherung.zweitwagen,
        abstellplatzGroup:[this.kvzVersicherung.abstellplaetze,Validators.required],
        wohneigentumGroup:this.kvzVersicherung.wohneigentueme,
        existenzgruenderGroup:[this.kvzVersicherung.existenzgruender,Validators.required],
        euFuehrerscheinGroup:[this.kvzVersicherung.euFuehrerschein,Validators.required],
        betriebsausgabeGroup:[this.kvzVersicherung.betriebsausgabe,Validators.required],
        finanzierungsartGroup:[this.kvzVersicherung.finanzierungsarte,Validators.required],
        vnSteuerabzugsberechtigGroup:[this.kvzVersicherung.vnSteuerabzugsberechtig,Validators.required],
        nutzungAuslandGroup:[this.kvzVersicherung.nutzung_im_Ausland,Validators.required],
        saisonKennzeichenGroup:[this.kvzVersicherung.saisonKennzeichen,Validators.required],
        vorschaedenLetztenDreiJahrenGroup:[this.kvzVersicherung.vorschaedenLetztenDreiJahren,Validators.required],

        nutzerArray: this.fb.group({

        }),

        nutzerGroup:this.fb.group({
          anredeGroup:[this.kvzVersicherung.anrede,Validators.required],
          vornameGroup:[this.kvzVersicherung.vorname,Validators.required],
          nachnameGroup:[this.kvzVersicherung.nachname,Validators.required],
          ortGroup:[this.kvzVersicherung.ort,Validators.required],
          postleitzahlGroup:[this.kvzVersicherung.postleitzahl,Validators.required],
          bezugVNGroup:[this.kvzVersicherung.bezug_zu_VN,Validators.required],
          berufsgruppeGroup:[this.kvzVersicherung.berufsgruppe,Validators.required],
          familienstandGroup:[this.kvzVersicherung.familienstand],
          familieGroup:[this.kvzVersicherung.familie,Validators.required],
          nutzerhaeuslicherGemeinschaftVNGroup:[this.kvzVersicherung.nutzerLebtInHaeuslicherGemeinschaftMitVN,Validators.required],
          fuehrerscheindatumGroup:[this.kvzVersicherung.fuehrerscheindatum,Validators.required],
          hatNutzerFuehrerscheinInEinemLandDerEUErworbenGroup:[this.kvzVersicherung.hatDerNutzerSeinenFuehrerscheinInEinemLandDerEUErworben],
          nutzerHatDenFuehrerscheinInDenLetzten10JahrenDurchgehendBesessenGroup:[this.kvzVersicherung.nutzerHatDenFuehrerscheinInDenLetzten10JahrenDurchgehendBesessen,Validators.required],
          wohnsitzSeitMind10JahrenInBRD:[this.kvzVersicherung.wohnsitzSeitMind10JahrenInBRD,Validators.required],
          sicherheitstrainingAbsolviertGroup:[this.kvzVersicherung.sicherheitstrainingAbsolviert,Validators.required],
          nutzungGroup:[this.kvzVersicherung.nutzungen, Validators.required],
          geburtsdatumGroup:[this.kvzVersicherung.gebutsdatum,Validators.required],
          begleitetesFahrenBeiNutzerGroup:[this.kvzVersicherung.begleitetesFahrenBeiNutzer, Validators.required],
          eintragImVerkehrszentralregisterGroup:[this.kvzVersicherung.eintragImVerkehrszentralregister,Validators.required],
          istEinHauptnutzerGroup:[this.kvzVersicherung.istEinHauptnutzer,Validators.required]
        }),
      }),

      fahrzeugKindGroup:this.fb.group({
        anredeKindGroup:[this.kvzVersicherung.anrede,Validators.required],
        familienstandKindGroup:[this.kvzVersicherung.familienstand,Validators.required],
        vornameKindGroup:[this.kvzVersicherung.vorname,Validators.required],
        nachnameKindGroup:[this.kvzVersicherung.nachname,Validators.required],
        berufsgruppeKindGroup:[this.kvzVersicherung.berufsgruppe,Validators.required],
        strasseKindGroup:[this.kvzVersicherung.strasse,Validators.required],
        hausnummerKindGroup:[this.kvzVersicherung.hausnummer,Validators.required],
        ortkindGroup:[this.kvzVersicherung.ort,Validators.required],
        postleitzahlKindGroup:[this.kvzVersicherung.postleitzahl,Validators.required],
        geburtsdatumKindGroup:[this.kvzVersicherung.gebutsdatum,Validators.required],
        firmennameKindGroup:[this.kvzVersicherung.firmenname,Validators.required],
        brancheKindGroup:[this.kvzVersicherung.brancheVN,Validators.required],

      }),

    }, {updateOn: 'submit'});
  }

  save(){
    console.log(this.kvzVersicherung);
    console.log('form: ', this.versicherungForm.value);
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
    this.kvzVersicherungService.saveKfzVersicherung(this.kvzVersicherung);
    console.log(kvzversicherungForm.value);
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
    return this.kvzVersicherungService.getGeschaefstvorfall().subscribe(data =>{
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
