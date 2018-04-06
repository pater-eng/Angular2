import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthentificationService } from '../../services/authentification.service';
import {AlertService} from '../../services/alert.service';
import {Input} from '@angular/compiler/src/core';
import {Contact} from '../../services/contact.service';
import {AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginModel: any = {};
 loading = false;
 returnUrl: String;
 result : any;
 constructor( private router: Router, private authentificationService: AuthentificationService, private alertService: AlertService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.authentificationService.logout();
    // this.returnUrl = this.router.routerState.snapshot.url;
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
  }
  login() {
    this.loading = true;
    if(this.loginModel.nom && this.loginModel.password){

      return this.authentificationService.login(this.loginModel.nom, this.loginModel.password)
        .subscribe(
          data => {
            // hier wird geprüft ob data nicht null ist
            // if(data){
            console.log("Ich bekomme diese Daten : "+ this.loginModel.nom + " " + this.loginModel.password);
            // this.router.navigate([this.returnUrl]);
            // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
            if(data){

              this.router.navigate(['/home'])

            }else{
              this.result = data;

            }
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });
    }
  }

  // matchPassword(abstractControl: AbstractControl){
  //  let password = abstractControl.get('password').value;
  //  let confirmPassword = abstractControl.get('confirmPassword').value;
  //  if(password != confirmPassword){
  //    console.log("false");
  //    abstractControl.get('confirmPassword').setErrors({matchPassword: true})
  //
  //  }else{
  //    console.log('true');
  //    return null;
  //  }
  // }
  // loginContact(e){
  //  e.preventDefault();
  //  console.log(e);
  //  var name = e.target.elements[0].value;
  //  var password = e.target.elements[1].value;
  //  console.log(name, password);
  //  return false;
  //
  // }

  logout(){
      this.router.navigate(['/logout'])

  }

}
