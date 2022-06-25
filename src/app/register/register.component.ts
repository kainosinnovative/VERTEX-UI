import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  registercontactinformation:any;
  registercurrentaddress: any;

  constructor( private frmbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.registercontactinformation = this.frmbuilder.group({
      first_name: [],
      last_name: [],
      usertype: [],
      legalbusinessname: [],
      tradename: [],
      user_id: [],
      password: []

})
    this.registercurrentaddress = this.frmbuilder.group({

  regcurrentaddress_name: [],
  regcurrentstate_name: [],
  regcurrentcity_name: [],
  regcurrentzip_name: [],
  regcurrentaddressline2_name: [],
  county_name: [],
  country_name: [],


 })
  }

  validation(){

    let first_name = this.registercontactinformation.get('first_name').value;
    let last_name = this.registercontactinformation.get('last_name').value;
    let usertype = this.registercontactinformation.get('usertype').value;
    let legalbusinessname = this.registercontactinformation.get('legalbusinessname').value;
    let tradename = this.registercontactinformation.get('tradename').value;
    let user_id = this.registercontactinformation.get('user_id').value;
    let password = this.registercontactinformation.get('password').value;


    let regcurrentaddress_name = this.registercurrentaddress.get('regcurrentaddress_name').value;
    let regcurrentstate_name = this.registercurrentaddress.get('regcurrentstate_name').value;
    let regcurrentcity_name = this.registercurrentaddress.get('regcurrentcity_name').value;
    let regcurrentzip_name = this.registercurrentaddress.get('regcurrentzip_name').value;
    let regcurrentaddressline2_name = this.registercurrentaddress.get('regcurrentaddressline2_name').value;
    let county_name = this.registercurrentaddress.get('county_name').value;
    let country_name = this.registercurrentaddress.get('country_name').value;



    if(first_name == null && last_name == null && usertype == null && legalbusinessname == null && tradename == null && user_id == null && password == null 
      && regcurrentaddress_name == null && regcurrentstate_name == null && regcurrentcity_name == null && regcurrentzip_name == null && regcurrentaddressline2_name == null && county_name == null && country_name == null){

      (document.getElementById('firstname_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('lastname_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('usertype_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('legal_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('trade_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('userid') as HTMLFormElement).classList.add("validation");
      (document.getElementById('password_id') as HTMLFormElement).classList.add("validation");


      (document.getElementById('regcurrentaddress_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('regcurrentstate_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('regcurrentcity_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('regcurrentzip_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('regcurrentaddressline2_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('county_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('country_id') as HTMLFormElement).classList.add("validation");
    }
  }

  inputErrorMessage(errormessage: any) {

    (document.getElementById(errormessage) as HTMLFormElement).classList.remove("validation");
  
    }

}
