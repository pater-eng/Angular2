import {Component, Input, OnInit} from '@angular/core';
import {KvzVersicherungService} from '../Services/kvz-versicherung-service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-deckungsumfang',
  templateUrl: './deckungsumfang.component.html',
  styleUrls: ['./deckungsumfang.component.css']
})
export class DeckungsumfangComponent implements OnInit {


  @Input() deckungsumfangForm: FormGroup;

  selectedSchadensfreiheitsrabatt:string;
  schadensfreiheitsrabatte:any;
  sFRegelungen:any;
  selectedSFRegelung:string;
  kasko_und_selbstbeteiligungen:any;
  selectKasko_und_selbstbeteiligungen:string;
  deckungssummer_in_derk_kfz_haftpflicht:any;
  selectedDeckungssummer_in_derk_kfz_haftpflicht:string;
  schutzbriefleistungen:any;
  selectedSchutzbriefleistungen:string;
  verbesserte_zweitwagenregelegung_fuer_pkw:any;
  selectedVerbesserte_zweitwagenregelegung_fuer_pkw:string;
  rabattschutz:any;
  selectedRabattschutz:string;
  rabattretter_fuer_pkw:any;
  selectedRabattretter_für_pkw:string;
  fahrerschutz:any;
  selectedFahrerschutz:string;
  werksattbindungen:any;
  selectedWerksattbindungen:string;
  auslandsschutzen:any;
  selectedAuslandsschutzen:string;
  rabattuebertragungen:any;
  selectedRabattuebertragungen:string;
  mallorcapolice:any;
  selectedMallorcapolice:string;
  gap_deckung:any;
  selectedGap_deckung:string;



  constructor(public kvzVersicherungService: KvzVersicherungService) { }

  ngOnInit() {
    this.getSchadensfreiheitsrabatt();
    this.getSFRegelung();
    this.getAuslandsschutzen();
    this.getDeckungssummer_in_derk_kfz_haftpflicht();
    this.getFahrerschutz();
    this.getGap_deckung();
    this.getKasko_und_selbstbeteiligungen();
    this.getMallorcapolice();
    this.getRabattretter_fuer_pkw();
    this.getRabattschutz();
    this.getRabattuebertragungen();
    this.getSchutzbriefleistungen();
    this.getVerbesserte_zweitwagenregelegung_fuer_pkw();
    this.getWerksattbindungen();

  }

  public getSchadensfreiheitsrabatt(){
    this.kvzVersicherungService.getschadensfreiheitsrabatt().subscribe(data=>{
      this.schadensfreiheitsrabatte = data;
      this.selectedSchadensfreiheitsrabatt=null;
    })
  }

  public getSFRegelung(){
    this.kvzVersicherungService.getSFRegelung().subscribe(data=>{
      this.sFRegelungen = data;
      this.selectedSFRegelung=null;
    })
  }
  public getKasko_und_selbstbeteiligungen(){
    this.kvzVersicherungService.getKasko_und_selbstbeteiligungen().subscribe(data=>{
      this.kasko_und_selbstbeteiligungen = data;
      this.selectKasko_und_selbstbeteiligungen=null;
    })
  }
  public getDeckungssummer_in_derk_kfz_haftpflicht(){
    this.kvzVersicherungService.getDeckungssummer_in_derk_kfz_haftpflicht().subscribe(data=>{
      this.deckungssummer_in_derk_kfz_haftpflicht = data;
      this.selectedDeckungssummer_in_derk_kfz_haftpflicht=null;
    })
  }
  public getSchutzbriefleistungen(){
    this.kvzVersicherungService.getSchutzbriefleistungen().subscribe(data=>{
      this.schutzbriefleistungen = data;
      this.selectedSchutzbriefleistungen=null;
    })
  }
  public getVerbesserte_zweitwagenregelegung_fuer_pkw(){
    this.kvzVersicherungService.getVerbesserte_zweitwagenregelegung_fuer_pkw().subscribe(data=>{
      this.verbesserte_zweitwagenregelegung_fuer_pkw = data;
      this.selectedVerbesserte_zweitwagenregelegung_fuer_pkw=null;
    })
  } public getRabattschutz(){
    this.kvzVersicherungService.getRabattschutz().subscribe(data=>{
      this.rabattschutz = data;
      this.selectedRabattschutz=null;
    })
  }
  public getRabattretter_fuer_pkw(){
    this.kvzVersicherungService.getRabattretter_fuer_pkw().subscribe(data=>{
      this.rabattretter_fuer_pkw = data;
      this.selectedRabattretter_für_pkw=null;
    })
  }

  public getFahrerschutz(){
    this.kvzVersicherungService.getFahrerschutz().subscribe(data=>{
      this.fahrerschutz = data;
      this.selectedFahrerschutz=null;
    })
  }
  public getWerksattbindungen(){
    this.kvzVersicherungService.getWerksattbindungen().subscribe(data=>{
      this.werksattbindungen = data;
      this.selectedWerksattbindungen=null;
    })
  }
  public getAuslandsschutzen(){
    this.kvzVersicherungService.getAuslandsschutzen().subscribe(data=>{
      this.auslandsschutzen = data;
      this.selectedAuslandsschutzen=null;
    })
  }
  public getRabattuebertragungen(){
    this.kvzVersicherungService.getRabattuebertragungen().subscribe(data=>{
      this.rabattuebertragungen = data;
      this.selectedRabattuebertragungen=null;
    })
  }
  public getMallorcapolice(){
    this.kvzVersicherungService.getMallorcapolice().subscribe(data=>{
      this.mallorcapolice = data;
      this.selectedMallorcapolice=null;
    })
  }
  public getGap_deckung(){
    this.kvzVersicherungService.getGap_deckung().subscribe(data=>{
      this.gap_deckung = data;
      this.selectedGap_deckung=null;
    })
  }


}
