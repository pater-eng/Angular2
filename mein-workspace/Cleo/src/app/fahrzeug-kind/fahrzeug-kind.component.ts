import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {KvzVersicherungService} from '../Services/kvz-versicherung-service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-fahrzeug-kind',
  templateUrl: './fahrzeug-kind.component.html',
  styleUrls: ['./fahrzeug-kind.component.css']
})
export class FahrzeugKindComponent implements OnInit {

  @Input() fahrzeugKindForm: FormGroup;
  @Input() choice;

  selectedAnrede: string;
  anrede: any;
  selectedBerufsgruppe: string;
  berufsgruppe: any;
  selectedFamilienstand: string;
  familienstand: any;
  selectedBranche: string;
  branche: any;


  constructor(public kvzVersicherungService: KvzVersicherungService) {
  }

  ngOnInit() {
    this.getAnrede();
    this.getBerufgruppe();
    this.getFamilienstand();
  }

  public getAnrede() {
    this.kvzVersicherungService.getAnrede().subscribe(data => {
      this.anrede = data;
      this.selectedAnrede = null;
    });
  }

  public getBerufgruppe() {
    this.kvzVersicherungService.getBerufgruppe().subscribe(data => {
      this.berufsgruppe = data;
      this.selectedBerufsgruppe = null;
    });
  }

  public getFamilienstand() {
    this.kvzVersicherungService.getFamiliestand().subscribe(data => {
      this.familienstand = data;
      this.selectedFamilienstand = null;
    });
  }

  public getBranche() {
    this.kvzVersicherungService.getBrancheVN().subscribe(data => {
      this.branche = data;
      this.selectedBranche = null;
    });
  }

}
