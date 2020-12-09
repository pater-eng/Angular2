import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {KvzVersicherung, KvzVersicherungService} from '../Services/kvz-versicherung-service';
import {ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ComboboxComponent} from '../combobox/combobox.component';

@Component({
  selector: 'app-textfeld',
  templateUrl: './textfeld.component.html',
  styleUrls: ['./textfeld.component.css'],

})
export class TextfeldComponent  {

  @Input() cssValue = '';
  @Input() vorUndNachname:boolean;

  @Input() labelText: string;
  @Input() isFragezeichen: boolean;
  @Input() unit:string = " ";
  @Input() isRequired:boolean;


  @Input() valeur: string;
  @Input() submittedAlready: boolean;
  @Output() valeurChange = new EventEmitter<string>();




 update() {
    this.valeurChange.emit(this.valeur);

  }
}









