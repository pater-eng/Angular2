import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  public static numero: number = 0;
  currentEntry: number;
  localNgModel: any;

  @Input() labelText:string;
  @Input() radioString:string;
  @Input() isFragezeichen:boolean;
  @Input() isRequired:boolean;
  @Input() beschreibung = [];

  @Input() valeur: boolean;
  @Input() submittedAlready: boolean;
  @Output() valeurChange = new EventEmitter<boolean>();

  constructor() {
    this.currentEntry = ++RadioComponent.numero; //Jedes einzele Radio kann unabhängig von andere Radio selectiert werden.
  }

  ngOnInit() {

  }
  update() {
    this.valeurChange.emit(this.valeur);
  }

}
