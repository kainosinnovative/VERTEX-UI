import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-vendormanagement',
  templateUrl: './vendormanagement.component.html',
  styleUrls: ['./vendormanagement.component.scss']
})
export class VendormanagementComponent implements OnInit {
  classList: any;
  nextElementSibling: any;
  
  
  opened = false;
  opened2 = false;
  opened3 = false;
  
  vendorMgmt: any;
  contactindividual: any;
  generalinformation: any;
  currentaddress: any;
  mailingaddress: any;
  Pastaddress: any;
  ContactBusiness: any;
  addtionalcontact: any;
  citytype: any;
  citydata: any
  statelistdata: any;
  mail: any;

  constructor(
    private frmbuilder: FormBuilder,private http: HttpClient
  ) { }

  ngOnInit(): void {

    
  //  this.getstate_list();

    this.vendorMgmt = this.frmbuilder.group({

      user_name :[],
      active: [],
     })

    this.contactindividual = this.frmbuilder.group({
      first_name: [],
      last_name: [],
      middle_name: [],
      social_no: [],
      email_individual: [],
      phone_no:[],
     })

    this.generalinformation = this.frmbuilder.group({

       business_name: [],
      federal:[],
      trade_name: [],
      duns_no: [],
      business_website:[],
     })

     this.currentaddress = this.frmbuilder.group({
      physical_address:[],
      street: [],
      state_province: [],
      city: [],
      zip_code: [],
      county: [],
      country: [],

     })

     this.mailingaddress = this.frmbuilder.group({
      mailing_address: [],
      mailing_street: [],
      state_province1: [],
      city_1: [],
      zip_code1: [],
      county_1: [],
      country_1:[],
      mailingfrom_date: [],

     })

     this.Pastaddress = this.frmbuilder.group({

      past_address: [],
      past_street: [],
      state_province2: [],
      city_2: [],
      zip_code2: [],
      county_2: [],
      country_2: [],
      pastfrom_date: [],
      pastto_date: [],

     })

     this.ContactBusiness = this.frmbuilder.group({

      contact_name: [],
      business_phone: [],
      title: [],
      business_email: [],
      addtional_name: [],
      addtional_title: [],
      addtional_businessmail: [],
      addtional_businessphone: [],
      VendorContactPrimary:[],
      VendorContactActive:[]
     })

   
  }

  is_business:any = "individual";

 mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 ssnformat = /^ [0-9] {3}-? [0-9] {2}-? [0-9] {4}$/;


  Userdata(vendorMgmt:any,contactindividual:any,generalinformation:any,currentaddress:any,mailingaddress:any,Pastaddress:any,ContactBusiness:any){

    console.log('abi', mailingaddress)

     if(this.is_business == 'individual'){


      
       let first_name = this.contactindividual.get('first_name').value;
       let last_name = this.contactindividual.get('last_name').value;
       let social_no = this.contactindividual.get('social_no').value;
       let email_individual = this.contactindividual.get('email_individual').value;
       let phone_no =this.contactindividual.get('phone_no').value;

       



       let physical_address =this.currentaddress.get('physical_address').value;
       let street =this.currentaddress.get('street').value;
       let state_province =this.currentaddress.get('state_province').value;
       let city= this.currentaddress.get('city').value;
       let zip_code =this.currentaddress.get('zip_code').value;
       let county =this.currentaddress.get('county').value;
       let country =this.currentaddress.get('country').value;

      


     if(first_name == null && last_name == null && social_no == null && email_individual == null && phone_no == null && 
      
      physical_address == null 
     && street == null && state_province == null && city == null && zip_code == null && county == null && country == null){

      (document.getElementById('firstname_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('lastname_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('socialsecurity_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('email_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('phone_id') as HTMLFormElement).classList.add("validation");


      (document.getElementById('currentaddress_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('currentstreet_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('stateprovice_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('currentcity_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('currentzipcode_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('currentcounty_id' ) as HTMLFormElement).classList.add("validation");
      (document.getElementById('currentcountry_id') as HTMLFormElement).classList.add("validation");

  }

  else if(!email_individual.match(this.mailformat)){
    (document.getElementById('email_idmsg') as HTMLFormElement).innerHTML = "Enter valid email address";
    (document.getElementById('email_idmsg') as HTMLFormElement).focus();
    return;
  }
}

  else{

    let Legal_business = this.generalinformation.get('business_name').value;
    let federal = this.generalinformation.get('federal').value;
    let trade_name = this. generalinformation.get('trade_name').value;
    let duns_no = this.generalinformation.get('duns_no').value;
    let business_website = this.generalinformation.get('business_website').value;

      let physical_address =this.currentaddress.get('physical_address').value;
       let street =this.currentaddress.get('street').value;
       let state_province =this.currentaddress.get('state_province').value;
       let city= this.currentaddress.get('city').value;
       let zip_code =this.currentaddress.get('zip_code').value;
       let county =this.currentaddress.get('county').value;
       let country =this.currentaddress.get('country').value;


    let contact_name = this.ContactBusiness.get('contact_name').value;
    let business_phone = this.ContactBusiness.get('business_phone').value;
    let title= this.ContactBusiness.get('title').value;
    let business_email = this.ContactBusiness.get('business_email').value;



    
     if(Legal_business == null && federal == null && trade_name == null  && duns_no == null && business_website == null &&Legal_business == null && federal == null && trade_name == null  && duns_no == null && business_website == null &&
      physical_address == null  && street == null && state_province == null && city == null && zip_code == null && county == null && country == null &&
      contact_name == null && business_phone ==  null && title == null  && business_email == null ){


        
      (document.getElementById('legalbusiness_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('federal_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('tradename_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('dunsno_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('businesswebsite_id') as HTMLFormElement).classList.add("validation");

      (document.getElementById('currentaddress_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('currentstreet_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('stateprovice_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('currentcity_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('currentzipcode_id') as HTMLFormElement).classList.add("validation");
      (document.getElementById('currentcounty_id' ) as HTMLFormElement).classList.add("validation");
      (document.getElementById('currentcountry_id') as HTMLFormElement).classList.add("validation");


       (document.getElementById('contactperson_id') as HTMLFormElement).classList.add("validation");
       (document.getElementById('businessphone_id') as HTMLFormElement).classList.add("validation");
       (document.getElementById('title_id') as HTMLFormElement).classList.add("validation");
       (document.getElementById('businessemail_id') as HTMLFormElement).classList.add("validation");
   
   
      }


  }
  
 

 }

EmptyErrorMessage(errormessage: any) {

  (document.getElementById(errormessage) as HTMLFormElement).classList.remove("validation");

  }

  EmptyErrorMessage1(email_idmsg: any) {

    (document.getElementById(email_idmsg) as HTMLFormElement).innerHTML = "";
  
    }

 
 

  
Displayvendortype(){

  let vendor_details = (<HTMLInputElement>document.getElementById("active")).checked;
 if(vendor_details == true){
this.is_business = 'business';

     (<HTMLInputElement>document.getElementById("General_Information")).style.display ="block";
    (<HTMLInputElement>document.getElementById("currentaddress")).style.display ="block";
    (<HTMLInputElement>document.getElementById("addtionaddress")).style.display ="block";
    (<HTMLInputElement>document.getElementById("contact_inforation")).style.display ="block";
    (<HTMLInputElement>document.getElementById("vendor-individual")).style.display ="none";
    
  }
  else{

 
    this.is_business = 'individual';
    (<HTMLInputElement>document.getElementById("vendor-individual")).style.display ="block";
    (<HTMLInputElement>document.getElementById("currentaddress")).style.display ="block";
    (<HTMLInputElement>document.getElementById("addtionaddress")).style.display ="block";
    (<HTMLInputElement>document.getElementById("contact_inforation")).style.display ="none";
    (<HTMLInputElement>document.getElementById("General_Information")).style.display ="none";
    
  }

}

display_addresstype(addresstype:any){

  if(addresstype == "mail"){
    (<HTMLInputElement>document.getElementById("mailing_type")).style.display ="block";
    (<HTMLInputElement>document.getElementById("past_type")).style.display ="none";

  }
  else if(addresstype == "past"){

    (<HTMLInputElement>document.getElementById("past_type")).style.display ="block";
    (<HTMLInputElement>document.getElementById("mailing_type")).style.display ="none";
  }
  
}
 
Address_swiping(){

      let address_type = (<HTMLInputElement>document.getElementById("address_active")).checked;
      if(address_type == true){

        this.mailingaddress.controls.mailing_address.setValue(this.currentaddress.get('physical_address').value); 
        this.mailingaddress.controls.mailing_street.setValue(this.currentaddress.get('street').value);
        this.mailingaddress.controls.state_province1.setValue(this.currentaddress.get('state_province').value);
        this.mailingaddress.controls.city_1.setValue(this.currentaddress.get('city').value);
        this.mailingaddress.controls.zip_code1.setValue(this.currentaddress.get('zip_code').value);
        this.mailingaddress.controls.county_1.setValue(this.currentaddress.get('county').value);
        this.mailingaddress.controls.country_1.setValue(this.currentaddress.get('country').value);

 }
 else{

  this.mailingaddress.controls.mailing_address.setValue(""); 
  this.mailingaddress.controls.mailing_street.setValue("");
  this.mailingaddress.controls.state_province1.setValue("");
  this.mailingaddress.controls.city_1.setValue("");
  this.mailingaddress.controls.zip_code1.setValue("");
  this.mailingaddress.controls.county_1.setValue("");
  this.mailingaddress.controls.country_1.setValue("");
 }
}


}
