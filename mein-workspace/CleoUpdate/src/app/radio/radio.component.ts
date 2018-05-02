import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  public static numero: number = 0;
  currentEntry: number;

  @Input() labelText:string;
  @Input() radioString:string;
  @Input() isFragezeichen:boolean;
  @Input() isRequired:boolean;
  @Input() beschreibung = [];

  @Input() radioControl: FormControl;

  constructor() {
    this.currentEntry = RadioComponent.numero++; //Jedes einzele radio kann selectiert werden
  }

  // Rekursion wird geguckt, ob bei direkte Eltern oder indirekte Eltern getouched wurde. Danach wird aktiviert oder deaktiviert.
  isParentTouched(localparent: FormGroup | FormArray){
    if(localparent.parent != null){
      return this.isParentTouched(localparent.parent);
    }
    return localparent.touched;
  }

  ngOnInit() {

  }

}
