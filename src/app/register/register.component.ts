import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  registercontactinformation:any;
  // vendortype: any;
  vendor: any;

  constructor( private frmbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.registercontactinformation = this.frmbuilder.group({
      first_name: [],
      last_name: [],
      usertype: [],
     user_id: [],
      password: [],
      regcurrentaddress_name: [],
      regcurrentaddressline2_name: [],
      regcurrentstate_name: [],
      regcurrentcity_name: [],
      county_name: [],
      country_name: [],
      regcurrentzip_name: []

})

  }

  validation(){

    let first_name = this.registercontactinformation.get('first_name').value;
    let last_name = this.registercontactinformation.get('last_name').value;
    let usertype = this.registercontactinformation.get('usertype').value;
    let user_id = this.registercontactinformation.get('user_id').value;
    let password = this.registercontactinformation.get('password').value;


    let regcurrentaddress_name = this.registercontactinformation.get('regcurrentaddress_name').value;
    let regcurrentaddressline2_name = this.registercontactinformation.get('regcurrentaddressline2_name').value;
    let regcurrentstate_name = this.registercontactinformation.get('regcurrentstate_name').value;
    let regcurrentcity_name = this.registercontactinformation.get('regcurrentcity_name').value;
    let county_name = this.registercontactinformation.get('county_name').value;
    let country_name = this.registercontactinformation.get('country_name').value;
    let regcurrentzip_name = this.registercontactinformation.get('regcurrentzip_name').value;

     if(first_name == null && last_name == null && usertype == null &&  user_id == null && password == null 
      && regcurrentaddress_name == null && regcurrentstate_name == null && regcurrentcity_name == null && regcurrentzip_name == null && regcurrentaddressline2_name == null && county_name == null && country_name == null){

      (document.getElementById('firstname_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('lastname_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('usertype_id') as HTMLFormElement).classList.add("validation");
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

    vendortype_display(){
      let active = (<HTMLInputElement>document.getElementById("active")).checked;
      // alert(active);

      if(active == true){

        (<HTMLInputElement>document.getElementById("vendorbusiness")).style.display ="block";
        (<HTMLInputElement>document.getElementById("vendorindividual")).style.display ="none";
      }

      else if(active == false){

        (<HTMLInputElement>document.getElementById("vendorbusiness")).style.display ="none";
        (<HTMLInputElement>document.getElementById("vendorindividual")).style.display ="block";

      }
    }

    vendordetails_display(){
      let usertype_id = (<HTMLInputElement>document.getElementById("usertype_id")).value;
      alert(usertype_id);

      if(usertype_id == 'vendor'){
        (<HTMLInputElement>document.getElementById("vendordetails")).style.display ="block";
      }
      else {
        (<HTMLInputElement>document.getElementById("vendordetails")).style.display ="none";
      }
    }

}
