import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 registercontactinformation:any;
  vendor: any;

  constructor(private frmbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.registercontactinformation = this.frmbuilder.group({

      first_name: [],
      last_name: [],
      usertype: [],
      user_id: [],
      password: [],
      conform_password: [],

      regcurrentaddress_name: [],
      regcurrentaddressline2_name: [],
      regcurrentstate_name: [],
      regcurrentcity_name: [],
      county_name: [],
      country_name: [],
      regcurrentzip_name: [],

      socialno_name:[],
      businesssize_name: [],
      be_classificationname: [],

})

}

  validation(){
// alert("in");
    let first_name = this.registercontactinformation.get('first_name').value;
    let last_name = this.registercontactinformation.get('last_name').value;
    let usertype = this.registercontactinformation.get('usertype').value;
    let user_id = this.registercontactinformation.get('user_id').value;
    let password = this.registercontactinformation.get('password').value;
    let conform_password = this.registercontactinformation.get('conform_password').value;


    let regcurrentaddress_name = this.registercontactinformation.get('regcurrentaddress_name').value;
    let regcurrentaddressline2_name = this.registercontactinformation.get('regcurrentaddressline2_name').value;
    let regcurrentstate_name = this.registercontactinformation.get('regcurrentstate_name').value;
    let regcurrentcity_name = this.registercontactinformation.get('regcurrentcity_name').value;
    let county_name = this.registercontactinformation.get('county_name').value;
    let country_name = this.registercontactinformation.get('country_name').value;
    let regcurrentzip_name = this.registercontactinformation.get('regcurrentzip_name').value;

    let socialno_name = this.registercontactinformation.get('socialno_name').value;
    let businesssize_name = this.registercontactinformation.get('businesssize_name').value;
    let be_classificationname = this.registercontactinformation.get('be_classificationname').value;

    if(first_name == null )
      {
       (document.getElementById('firstname_id') as HTMLFormElement).classList.add("validation");
     }

      if(last_name == null)
      {
      (document.getElementById('lastname_id') as HTMLFormElement).classList.add("validation");
     }

     if(usertype == null)
     {
     (document.getElementById('usertype_id') as HTMLFormElement).classList.add("validation");
      }
      if(user_id == null)
     {
      (document.getElementById('userid') as HTMLFormElement).classList.add("validation");
      }
      if(password == null)
     {
      (document.getElementById('password_id') as HTMLFormElement).classList.add("validation");
      }
      if(regcurrentaddress_name == null)
      {
       (document.getElementById('regcurrentaddress_id') as HTMLFormElement).classList.add("validation");
       }
       if(regcurrentaddressline2_name == null)
       {
        (document.getElementById('regcurrentstate_id') as HTMLFormElement).classList.add("validation");
        }
        if(regcurrentaddressline2_name == null)
        {
         (document.getElementById('regcurrentstate_id') as HTMLFormElement).classList.add("validation");
         }

    //  if(first_name == null && last_name == null && usertype == null &&  user_id == null && password == null   
    //   && regcurrentaddress_name == null && regcurrentstate_name == null && regcurrentcity_name == null && regcurrentzip_name == null && regcurrentaddressline2_name == null && county_name == null && country_name == null
     
    //   ){

    //   (document.getElementById('firstname_id') as HTMLFormElement).classList.add("validation");
    //   (document.getElementById('last_name') as HTMLFormElement).classList.add("validation");
    //   (document.getElementById('usertype_id') as HTMLFormElement).classList.add("validation");
    //   (document.getElementById('userid') as HTMLFormElement).classList.add("validation");
    //   (document.getElementById('password_id') as HTMLFormElement).classList.add("validation");


    //   (document.getElementById('regcurrentaddress_id') as HTMLFormElement).classList.add("validation");
    //   (document.getElementById('regcurrentstate_id') as HTMLFormElement).classList.add("validation");
    //   (document.getElementById('regcurrentcity_id') as HTMLFormElement).classList.add("validation");
    //   (document.getElementById('regcurrentzip_id') as HTMLFormElement).classList.add("validation");
    //   (document.getElementById('regcurrentaddressline2_id') as HTMLFormElement).classList.add("validation");
    //   (document.getElementById('county_id') as HTMLFormElement).classList.add("validation");
    //   (document.getElementById('country_id') as HTMLFormElement).classList.add("validation");

    //   }

    // else  if(first_name == null || last_name == null || usertype == null ||  user_id == null || password == null   
    //     || regcurrentaddress_name == null || regcurrentstate_name == null || regcurrentcity_name == null || regcurrentzip_name == null || regcurrentaddressline2_name == null || county_name == null || country_name == null
       
    //     ){
  
    //     (document.getElementById('firstname_id') as HTMLFormElement).classList.add("validation");
    //     (document.getElementById('lastname_id') as HTMLFormElement).classList.add("validation");
    //     (document.getElementById('usertype_id') as HTMLFormElement).classList.add("validation");
    //     (document.getElementById('userid') as HTMLFormElement).classList.add("validation");
    //     (document.getElementById('password_id') as HTMLFormElement).classList.add("validation");
  
  
    //     (document.getElementById('regcurrentaddress_id') as HTMLFormElement).classList.add("validation");
    //     (document.getElementById('regcurrentstate_id') as HTMLFormElement).classList.add("validation");
    //     (document.getElementById('regcurrentcity_id') as HTMLFormElement).classList.add("validation");
    //     (document.getElementById('regcurrentzip_id') as HTMLFormElement).classList.add("validation");
    //     (document.getElementById('regcurrentaddressline2_id') as HTMLFormElement).classList.add("validation");
    //     (document.getElementById('county_id') as HTMLFormElement).classList.add("validation");
    //     (document.getElementById('country_id') as HTMLFormElement).classList.add("validation");
  
    //     }

  // else if(socialno_id == null){
  //   (document.getElementById('socialno_id') as HTMLFormElement).classList.add("validation");
  // }

  //   else if(password != (conform_password)){

  //     (document.getElementById('comformpassword_id') as HTMLFormElement).classList.add("validation");
  //   }

    

  //   else if( socialno_name == null){
  //     (document.getElementById('socialno_id') as HTMLFormElement).classList.add("validation");
  //   }

  //   else{

      
  //     if(businesssize_name == null && be_classificationname == null){

  //     (document.getElementById('business_id') as HTMLFormElement).classList.add("validation");
  //     (document.getElementById('be_classificationid') as HTMLFormElement).classList.add("validation");
  // }
  // }

  }

  inputErrorMessage(errormessage: any) {

    (document.getElementById(errormessage) as HTMLFormElement).classList.remove("validation");
  
    }

    vendortype_display(active:any){

      let active1 = (<HTMLInputElement>document.getElementById("active")).checked;
     
      if(active1 == true){

        (<HTMLInputElement>document.getElementById("vendorbusiness")).style.display ="block";
        (<HTMLInputElement>document.getElementById("vendorindividual")).style.display ="none";
        
      }

      else if(active1 == false){

        (<HTMLInputElement>document.getElementById("vendorbusiness")).style.display ="none";
        (<HTMLInputElement>document.getElementById("vendorindividual")).style.display ="block";

      }
    }

    vendordetails_display(){
      let usertype_id = (<HTMLInputElement>document.getElementById("usertype_id")).value;
     
      if(usertype_id == 'vendor'){
        (<HTMLInputElement>document.getElementById("vendordetails")).style.display ="block";
      }
      else {
        (<HTMLInputElement>document.getElementById("vendordetails")).style.display ="none";
      }
    }

}
