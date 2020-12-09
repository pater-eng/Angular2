import {Component, Input, OnInit, forwardRef, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm} from '@angular/forms';
import {KvzVersicherung} from '../Services/kvz-versicherung-service';



@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css']

})
export class ComboboxComponent {

  @Input() labelText:string;
  @Input() isRequired:boolean;
  @Input() listValues: any;
  @Input() isFragezeichen: boolean;
  @Input() valeur:string; // valeur bezieht sich auf value des Inputfeldes, das gewählt wird
  @Input() submittedAlready: boolean;
  @Input()iswaehlenNotDefault:boolean; // für den default wert

  // damit werden Eltern die Steuerdaten bekommen kann
  @Output() fahrzeughalterKind = new EventEmitter<string>();
  @Output() valeurChange = new EventEmitter<string>();
  
  constructor(){

}

  print() {
    console.log(this.valeur);
    this.valeurChange.emit(this.valeur);
  }
  update() {
    this.fahrzeughalterKind.emit(this.valeur);
  }
  onClick(evt:Event){
    console.log(evt);
  }

}
