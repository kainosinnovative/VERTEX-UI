import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,} from '@angular/forms';

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
  vendorMgmt: any;
  constructor(
    private frmbuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.vendorMgmt = this.frmbuilder.group({

      user_name :[],
      active: [],
      first_name: [],
      last_name: [],
      middle_name: [],
      social_no: [],
      email_individual: [],
      phone_no:[],
      physical_address:[],
      street: [],
      state_province: [],
      city: [],
      zip_code: [],
      county: [],
      country: [],
      mailing_address: [],
      mailing_street: [],
      state_province1: [],
      city_1: [],
      zip_code1: [],
      county_1: [],
      business_name: [],
      federal:[],
      trade_name: [],
      duns_no: [],
      business_website:[],
      contact_name: [],
      business_phone: [],
      title: [],
      business_email: []
    })
  }

  is_business:any = "individual";

 mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  Userdata(){

     if(this.is_business == 'individual'){
      

       let user_name = this.vendorMgmt.get('user_name').value;
      //  let active = this.vendorMgmt.get('active').value;
       let first_name = this.vendorMgmt.get('first_name').value;
       let last_name = this.vendorMgmt.get('last_name').value;
       let middle_name = this.vendorMgmt.get('middle_name').value; 
       let social_no = this.vendorMgmt.get('social_no').value;
       let email_individual = this.vendorMgmt.get('email_individual').value;
       let phone_no =this.vendorMgmt.get('phone_no').value;

       let physical_address =this.vendorMgmt.get('physical_address').value;
       let street =this.vendorMgmt.get('street').value;
       let state_province =this.vendorMgmt.get('state_province').value;
       let city= this.vendorMgmt.get('city').value;
       let zip_code =this.vendorMgmt.get('zip_code').value;
       let county =this.vendorMgmt.get('county').value;
       let country =this.vendorMgmt.get('country').value;

       let mailing_address =this.vendorMgmt.get('mailing_address').value;
       let mailing_street = this.vendorMgmt.get('mailing_address').value;
       let state_province1 = this.vendorMgmt.get('state_province1').value;
       let city_1 = this.vendorMgmt.get('city_1').value;
       let zip_code1 = this.vendorMgmt.get('zip_code1').value;
       let county_1 = this.vendorMgmt.get('county_1').value;
       let country_1 = this.vendorMgmt.get('country_1').value;

    if(user_name == null){
        (document.getElementById('errormessage') as HTMLFormElement).innerHTML = "Enter the User Name";
        (document.getElementById('errormessage') as HTMLFormElement).focus();
    
      }
    // else if(active == null){

    //   (document.getElementById('errormessage1') as HTMLFormElement).innerHTML = "Select Vendor Type";
    //   (document.getElementById('errormessage1') as HTMLFormElement).focus();
 
    // }
    else if(first_name == null){
      (document.getElementById('errormessage52') as HTMLFormElement).innerHTML = "Enter the First Name";
      (document.getElementById('errormessage52') as HTMLFormElement).focus();
      return;
    }
    else if(last_name == null){
      (document.getElementById('errormessage23') as HTMLFormElement).innerHTML = "Enter the Last Name";
      (document.getElementById('errormessage23') as HTMLFormElement).focus();
      return;
    }
    else if(middle_name == null){ 
      (document.getElementById('errormessage24') as HTMLFormElement).innerHTML = "Enter the Middle Name";
      (document.getElementById('errormessage24') as HTMLFormElement).focus();
      return;
    }
    else if(social_no == ""){
      (document.getElementById('errormessage25') as HTMLFormElement).innerHTML = "Enter the Social Security Number";
      (document.getElementById('errormessage25') as HTMLFormElement).focus();
      return;
    }
    else if(email_individual == ""){
      (document.getElementById('errormessage26') as HTMLFormElement).innerHTML = "Enter the Email";
      (document.getElementById('errormessage26') as HTMLFormElement).focus();
      return;
    }
    
    else if (!email_individual.match(this.mailformat)) {
      (document.getElementById('errormessage26') as HTMLFormElement).innerHTML = "Enter the Correct Emailid";
      (document.getElementById('errormessage26') as HTMLFormElement).focus();
      return;
    }

    else if(phone_no == ""){
      (document.getElementById('errormessage27') as HTMLFormElement).innerHTML = "Enter the Phone";
      (document.getElementById('errormessage27') as HTMLFormElement).focus();
      return;
    }
    else if(physical_address == ""){
      (document.getElementById('errormessage4') as HTMLFormElement).innerHTML = "Enter the Physical Address";
      (document.getElementById('errormessage4') as HTMLFormElement).focus();
      return;
    }

    else if(street == ""){
      (document.getElementById('errormessage28') as HTMLFormElement).innerHTML = "Enter the Street";
      (document.getElementById('errormessage28') as HTMLFormElement).focus();
      return;
    }
    else if(state_province == ""){
      (document.getElementById('errormessage5') as HTMLFormElement).innerHTML = "Select state_province";
      (document.getElementById('errormessage5') as HTMLFormElement).focus();
      return;
    }
    else if(city == ""){
      (document.getElementById('errormessage6') as HTMLFormElement).innerHTML = "Enter the City";
      (document.getElementById('errormessage6') as HTMLFormElement).focus();
      return;
    }
    else if(zip_code == ""){
      (document.getElementById('errormessage7') as HTMLFormElement).innerHTML = "Enter the Zip Code";
      (document.getElementById('errormessage7') as HTMLFormElement).focus();
      return;
    }
    else if(county == ""){
      (document.getElementById('errormessage8') as HTMLFormElement).innerHTML = "Enter the County";
      (document.getElementById('errormessage8') as HTMLFormElement).focus();
      return;
    }
    else if(country == ""){
      (document.getElementById('errormessage9') as HTMLFormElement).innerHTML = "Enter the Country";
      (document.getElementById('errormessage9') as HTMLFormElement).focus();
      return;
    }

 

  else if(mailing_address == null && mailing_street == null && state_province1 == null && city_1 == null &&  zip_code1 == null && county_1 == null  && country_1 == null){

   alert("pls enter all value");
   return;
   }
    
else {


if( mailing_address == ""){

  // alert("hi");
    (document.getElementById('errormessage12') as HTMLFormElement).innerHTML = "Enter the Mailing Address";
    (document.getElementById('errormessage12') as HTMLFormElement).focus();
    return;
}

else if(mailing_street == ""){

  (document.getElementById('errormessage29') as HTMLFormElement).innerHTML = "Enter the  Street Address";
   (document.getElementById('errormessage29') as HTMLFormElement).focus();
   return;
}

else if(state_province1 == ""){

     (document.getElementById('errormessage13') as HTMLFormElement).innerHTML = "Select State/Province";
      (document.getElementById('errormessage13') as HTMLFormElement).focus();
      return;
}
else if(city_1 == ""){
      (document.getElementById('errormessage14') as HTMLFormElement).innerHTML = "Enter the City";
      (document.getElementById('errormessage14') as HTMLFormElement).focus();
      return;
    }
  else if(zip_code1 == ""){
      (document.getElementById('errormessage15') as HTMLFormElement).innerHTML = "Enter the Zip Code";
      (document.getElementById('errormessage15') as HTMLFormElement).focus();
      return;
    }
    else if(county_1 == ""){
      (document.getElementById('errormessage16') as HTMLFormElement).innerHTML = "Enter the County";
      (document.getElementById('errormessage16') as HTMLFormElement).focus();
      return;
    }
    else if(country_1 == ""){
      (document.getElementById('errormessage17') as HTMLFormElement).innerHTML = "Enter the Country";
      (document.getElementById('errormessage17') as HTMLFormElement).focus();
      return;
    }

}
  }


else { 

  let user_name = this.vendorMgmt.get('user_name').value;
  //  let active = this.vendorMgmt.get('active').value;    
  let Legal_business = this.vendorMgmt.get('business_name').value;
  let federal = this.vendorMgmt.get('federal').value;
  let trade_name = this. vendorMgmt.get('trade_name').value;
  let duns_no = this.vendorMgmt.get('duns_no').value;
  let business_website = this.vendorMgmt.get('business_website').value;

  let physical_address =this.vendorMgmt.get('physical_address').value;
  let street =this.vendorMgmt.get('street').value;
  let state_province =this.vendorMgmt.get('state_province').value;
  let city= this.vendorMgmt.get('city').value;
  let zip_code =this.vendorMgmt.get('zip_code').value;
  let county =this.vendorMgmt.get('county').value;
  let country =this.vendorMgmt.get('country').value;

  let contact_name = this.vendorMgmt.get('contact_name').value;
  let business_phone = this.vendorMgmt.get('business_phone').value;
  let title= this.vendorMgmt.get('title').value;
  let business_email = this.vendorMgmt.get('business_email').value;

    if(user_name == ""){
            (document.getElementById('errormessage') as HTMLFormElement).innerHTML = "Enter the User Name";
            (document.getElementById('errormessage') as HTMLFormElement).focus();
            return;
          }
      // else if(active == ""){

      //   (document.getElementById('errormessage1') as HTMLFormElement).innerHTML = "Select Vendor Type";
      //   (document.getElementById('errormessage1') as HTMLFormElement).focus();
      //   return;
      // }    
     else if(Legal_business == ""){
        (document.getElementById('errormessage2') as HTMLFormElement).innerHTML = "Enter the Legal Business Name";
        (document.getElementById('errormessage2') as HTMLFormElement).focus();
        return;
      }
      else if(federal == ""){
        (document.getElementById('errormessage3') as HTMLFormElement).innerHTML = "Enter the Federal EIN";
        (document.getElementById('errormessage3') as HTMLFormElement).focus();
        return;
      }
     
      else if(trade_name == ""){
        (document.getElementById('errormessage10') as HTMLFormElement).innerHTML = "Enter your Trade Name";
        (document.getElementById('errormessage10') as HTMLFormElement).focus();
        return;
      }
      else if(duns_no == ""){
        (document.getElementById('errormessage11') as HTMLFormElement).innerHTML = "Enter the DUNS Number";
        (document.getElementById('errormessage11') as HTMLFormElement).focus();
        return;
      }
      
      else if(business_website == ""){
        (document.getElementById('errormessage18') as HTMLFormElement).innerHTML = "Enter the Business Website";
        (document.getElementById('errormessage18') as HTMLFormElement).focus();
        return;
      }
      else if(physical_address == ""){
        (document.getElementById('errormessage4') as HTMLFormElement).innerHTML = "Enter the Current Address";
        (document.getElementById('errormessage4') as HTMLFormElement).focus();
        return;
      }
      else if(street == ""){
        (document.getElementById('errormessage28') as HTMLFormElement).innerHTML = "Enter the Street";
        (document.getElementById('errormessage28') as HTMLFormElement).focus();
        return;
      }
      else if(state_province == ""){
        (document.getElementById('errormessage5') as HTMLFormElement).innerHTML = "Select state_province";
        (document.getElementById('errormessage5') as HTMLFormElement).focus();
        return;
      }
      else if(city == ""){
        (document.getElementById('errormessage6') as HTMLFormElement).innerHTML = "Enter the City";
        (document.getElementById('errormessage6') as HTMLFormElement).focus();
        return;
      }
      else if(zip_code == ""){
        (document.getElementById('errormessage7') as HTMLFormElement).innerHTML = "Enter the Zip Code";
        (document.getElementById('errormessage7') as HTMLFormElement).focus();
        return;
      }
      else if(county == ""){
        (document.getElementById('errormessage8') as HTMLFormElement).innerHTML = "Enter the County";
        (document.getElementById('errormessage8') as HTMLFormElement).focus();
        return;
      }
      else if(country == ""){
        (document.getElementById('errormessage9') as HTMLFormElement).innerHTML = "Enter the Country";
        (document.getElementById('errormessage9') as HTMLFormElement).focus();
        return;
      }
      else if(contact_name == ""){
        (document.getElementById('errormessage19') as HTMLFormElement).innerHTML = "Enter your Contact Person Name";
        (document.getElementById('errormessage19') as HTMLFormElement).focus();
        return;
      }
      else if(business_phone == ""){
        (document.getElementById('errormessage20') as HTMLFormElement).innerHTML = "Enter the Business Phone";
        (document.getElementById('errormessage20') as HTMLFormElement).focus();
        return;
      }
      else if(title == ""){
        (document.getElementById('errormessage21') as HTMLFormElement).innerHTML = "Enter the Title";
        (document.getElementById('errormessage21') as HTMLFormElement).focus();
        return;
      }
      else if(business_email == ""){
        (document.getElementById('errormessage22') as HTMLFormElement).innerHTML = "Enter the Business Email";
        (document.getElementById('errormessage22') as HTMLFormElement).focus();
        return;
      }
      else if(!business_email.match(this.mailformat)){
        (document.getElementById('errormessage22') as HTMLFormElement).innerHTML = "Enter the Correct Business Email";
        (document.getElementById('errormessage22') as HTMLFormElement).focus();
        return;
      }
      

}
  }

EmptyErrorMessage(errormessage: any) {

     (document.getElementById(errormessage) as HTMLFormElement).innerHTML = "";
  
  }

  
Displayvendortype(){

  let vendor_details = (<HTMLInputElement>document.getElementById("active")).checked;
 if(vendor_details == true){
this.is_business = 'business';

     (<HTMLInputElement>document.getElementById("General_Information")).style.display ="block";
    (<HTMLInputElement>document.getElementById("address_information")).style.display ="block";
    (<HTMLInputElement>document.getElementById("contact_inforation")).style.display ="block";
    (<HTMLInputElement>document.getElementById("vendor-individual")).style.display ="none";
    
  }
  else{

 
    this.is_business = 'individual';
    (<HTMLInputElement>document.getElementById("vendor-individual")).style.display ="block";
    (<HTMLInputElement>document.getElementById("address_information")).style.display ="block";
    (<HTMLInputElement>document.getElementById("General_Information")).style.display ="none";
    (<HTMLInputElement>document.getElementById("contact_inforation")).style.display ="none";
    
  }

}
 

}
