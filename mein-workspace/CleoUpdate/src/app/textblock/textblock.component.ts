import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {KvzVersicherung} from '../Services/kvz-versicherung-service';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-textblock',
  templateUrl: './textblock.component.html',
  styleUrls: ['./textblock.component.css']
})
export class TextblockComponent implements OnInit {

  @Input() labelText:string;
  @Input() isRequired:boolean;


  @Input() valeur_1:string;
  @Input() valeur_2:string;
  @Input() valeur_3:string;

  @Input() submittedAlready: boolean;
  @Output() valeurChange = new EventEmitter<string>();
  constructor() { }


  ngOnInit() {
  }
  update_1() {
    this.valeurChange.emit(this.valeur_1);

  }
  update_2() {
    this.valeurChange.emit(this.valeur_2);
  }
  update_3() {
    this.valeurChange.emit(this.valeur_3);
  }

}
