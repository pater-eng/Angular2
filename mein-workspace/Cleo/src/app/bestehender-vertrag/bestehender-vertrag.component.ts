import {Component, Input, OnInit} from '@angular/core';
import {KvzVersicherung, KvzVersicherungService} from '../Services/kvz-versicherung-service';
import {Form, FormBuilder, FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bestehender-vertrag',
  templateUrl: './bestehender-vertrag.component.html',
  styleUrls: ['./bestehender-vertrag.component.css']
})
export class BestehenderVertragComponent implements OnInit {


   @Input() bestehenderVertragForm: FormGroup;

  neuvertrag: boolean = false;
  vertragsart:string = "Bestehender Vertrag";

  selectedVersicherungsgeselschaft:string;
  versicherungsgeselschaft:any;

  selectedgetZahlweise:string;
  zahlweise:any;

  selectedKuendigung:string;
  kuendigung:any;



  constructor(public kvzVersicherungService: KvzVersicherungService) {

  }

  ngOnInit() {
    this.getVersicherungsgeselschaft();
    this.getZahlweise();
    this.getKuedingung();
  }

 public toggleNeuvertrag(neuvertrag){
    (neuvertrag)? this.vertragsart = "Neuvertrag" : this.vertragsart = "Bestehender Vertrag";
    this.neuvertrag = neuvertrag;
  }

  public getVersicherungsgeselschaft(){
    this.kvzVersicherungService.getVersicherungsgesellschafte().subscribe(data =>{
      this.versicherungsgeselschaft = data;
      this.selectedVersicherungsgeselschaft = null;
    }, err =>{
      console.log(err);
    });
  }

  public getZahlweise(){
    this.kvzVersicherungService.getZahlweise().subscribe(data =>{
      this.zahlweise = data;
      this.selectedgetZahlweise = null;
    }, err =>{
      console.log(err);
    });
  }

  public getKuedingung(){
    this.kvzVersicherungService.getKuendigung().subscribe(data=>{
      this.kuendigung=data;
      this.selectedKuendigung = null;
    }, err =>{
      console.log(err);
    });
  }
}
