import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() labelText:string;
  @Input() isFragezeichen:boolean;
  @Input() isRequired:boolean;

  @Input() valeur: boolean;
  @Input() submittedAlready: boolean;
  @Output() valeurChange = new EventEmitter<boolean>();
  constructor() { }

   ngOnInit() {
  }
  update() {
    this.valeurChange.emit(this.valeur);
  }
}
