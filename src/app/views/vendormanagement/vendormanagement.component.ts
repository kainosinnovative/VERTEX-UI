import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,} from '@angular/forms';
import { RestAPIService } from "../shared/rest-api.service";

@Component({
  selector: 'app-vendormanagement',
  templateUrl: './vendormanagement.component.html',
  styleUrls: ['./vendormanagement.component.scss']
})
export class VendormanagementComponent implements OnInit {
  classList: any;
  nextElementSibling: any;
  
  
  opened = true;
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

  constructor(
    private frmbuilder: FormBuilder,public restApi: RestAPIService,
  ) { }

  ngOnInit(): void {

    
   this.getstate_list();

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

     })

     this.Pastaddress = this.frmbuilder.group({

      past_address: [],
      past_street: [],
      state_province2: [],
      city_2: [],
      zip_code2: [],
      county_2: [],
      country_2: []

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
     })

    //  this.addtionalcontact = this.frmbuilder.group({

      

    //  })

  }

  is_business:any = "individual";

 mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


 getstate_list(){

  return this.restApi.getstatelist().subscribe(
    (data: any) => {
  console.log(data)

    // this.statelistdata = data;
  
   
    // console.log(statelistdata)
//      this.citytype = statelistdata;

//      console.log(this.citytype)
//  //console.log("hi")
//      this.citydata = this.citytype.data.list;
     
//       console.log("data>>>>",this.citydata)
   })
 }

 



  Userdata(vendorMgmt:any,contactindividual:any,generalinformation:any,currentaddress:any,mailingaddress:any,Pastaddress:any,ContactBusiness:any){

console.log('username', vendorMgmt);
console.log('contact ind', contactindividual);
console.log('general bus', generalinformation);
console.log('current adrs', currentaddress);
console.log('mailing adrs', mailingaddress);
console.log('past adrs', Pastaddress);
console.log('contact bus', ContactBusiness)

     if(this.is_business == 'individual'){
      

       let user_name = this.vendorMgmt.get('user_name').value;
      //  let active = this.vendorMgmt.get('active').value;
       let first_name = this.contactindividual.get('first_name').value;
       let last_name = this.contactindividual.get('last_name').value;
       let middle_name = this.contactindividual.get('middle_name').value; 
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

      

    if(user_name == null){
        (document.getElementById('errormessage') as HTMLFormElement).innerHTML = "Enter the User Name";
        (document.getElementById('user') as HTMLFormElement).focus();
      }
    // else if(active == null){

    //   (document.getElementById('errormessage1') as HTMLFormElement).innerHTML = "Select Vendor Type";
    //   (document.getElementById('errormessage1') as HTMLFormElement).focus();
 
    // }
    else if(first_name == null){
      (document.getElementById('errormessage52') as HTMLFormElement).innerHTML = "Enter the First Name";
      (document.getElementById('firstname_id') as HTMLFormElement).focus();
      return;
    }
    else if(last_name == null){
      (document.getElementById('errormessage23') as HTMLFormElement).innerHTML = "Enter the Last Name";
      (document.getElementById('lastname_id') as HTMLFormElement).focus();
      return;
    }
    else if(middle_name == null){ 
      (document.getElementById('errormessage24') as HTMLFormElement).innerHTML = "Enter the Middle Name";
      (document.getElementById('middlename_id') as HTMLFormElement).focus();
      return;
    }
    else if(social_no == null){
      (document.getElementById('errormessage25') as HTMLFormElement).innerHTML = "Enter the Social Security Number";
      (document.getElementById('socialsecurity_id') as HTMLFormElement).focus();
      return;
    }
    else if(email_individual == null){
      (document.getElementById('errormessage26') as HTMLFormElement).innerHTML = "Enter the Email";
      (document.getElementById('email_id') as HTMLFormElement).focus();
      return;
    }
    
    else if (!email_individual.match(this.mailformat)) {
      (document.getElementById('errormessage26') as HTMLFormElement).innerHTML = "Enter the Correct Emailid";
      (document.getElementById('email_id') as HTMLFormElement).focus();
      return;
    }

    else if(phone_no == null){
      (document.getElementById('errormessage27') as HTMLFormElement).innerHTML = "Enter the Phone";
      (document.getElementById('phone_id') as HTMLFormElement).focus();
      return;
    }
    else if(physical_address == null){
      (document.getElementById('errormessage4') as HTMLFormElement).innerHTML = "Enter the Physical Address";
      (document.getElementById('currentaddress_id') as HTMLFormElement).focus();
      return;
    }

    else if(street == null){
      (document.getElementById('errormessage28') as HTMLFormElement).innerHTML = "Enter the Street";
      (document.getElementById('currentstreet_id') as HTMLFormElement).focus();
      return;
    }
    else if(state_province == null){
      (document.getElementById('errormessage5') as HTMLFormElement).innerHTML = "Select state_province";
      (document.getElementById('stateprovice_id') as HTMLFormElement).focus();
      return;
    }
    else if(city == null){
      (document.getElementById('errormessage6') as HTMLFormElement).innerHTML = "Enter the City";
      (document.getElementById('currentcity_id') as HTMLFormElement).focus();
      return;
    }
    else if(zip_code == null){
      (document.getElementById('errormessage7') as HTMLFormElement).innerHTML = "Enter the Zip Code";
      (document.getElementById('currentzipcode_id') as HTMLFormElement).focus();
      return;
    }
    else if(county == null){
      (document.getElementById('errormessage8') as HTMLFormElement).innerHTML = "Enter the County";
      (document.getElementById('currentcounty_id') as HTMLFormElement).focus();
      return;
    }
    else if(country == null){
      (document.getElementById('errormessage9') as HTMLFormElement).innerHTML = "Enter the Country";
      (document.getElementById('currentcountry_id') as HTMLFormElement).focus();
      return;
    }

    let mailing_address =this.mailingaddress.get('mailing_address').value;
    let mailing_street = this.mailingaddress.get('mailing_street').value;
    let state_province1 = this.mailingaddress.get('state_province1').value;
    let city_1 = this.mailingaddress.get('city_1').value;
    let zip_code1 = this.mailingaddress.get('zip_code1').value;
    let county_1 = this.mailingaddress.get('county_1').value;
    let country_1 = this.mailingaddress.get('country_1').value;


  

  if(mailing_address == null && mailing_street == null && state_province1 == null && city_1 == null &&  zip_code1 == null && county_1 == null  && country_1 == null){

  //  alert("pls enter all value");
   return;
   }
    
else {
// alert("hi")

if( mailing_address == null){

  // alert("hi");
    (document.getElementById('errormessage12') as HTMLFormElement).innerHTML = "Enter the Mailing Address";
    (document.getElementById('mailingaddress_id') as HTMLFormElement).focus();
    return;
}

else if(mailing_street == null){

  (document.getElementById('errormessage29') as HTMLFormElement).innerHTML = "Enter the  Street Address";
   (document.getElementById('mailingstreet_id') as HTMLFormElement).focus();
   return;
}

else if(state_province1 == null){

     (document.getElementById('errormessage13') as HTMLFormElement).innerHTML = "Select State/Province";
      (document.getElementById('mailingstateprovince_id') as HTMLFormElement).focus();
      return;
}
else if(city_1 == null){
      (document.getElementById('errormessage14') as HTMLFormElement).innerHTML = "Enter the City";
      (document.getElementById('mailingcity_id') as HTMLFormElement).focus();
      return;
    }
  else if(zip_code1 == null){
      (document.getElementById('errormessage15') as HTMLFormElement).innerHTML = "Enter the Zip Code";
      (document.getElementById('mailingzipcode_id') as HTMLFormElement).focus();
      return;
    }
    else if(county_1 == null){
      (document.getElementById('errormessage16') as HTMLFormElement).innerHTML = "Enter the County";
      (document.getElementById('mailingcounty_id') as HTMLFormElement).focus();
      return;
    }
    else if(country_1 == null){
      (document.getElementById('errormessage17') as HTMLFormElement).innerHTML = "Enter the Country";
      (document.getElementById('mailingcountry_id') as HTMLFormElement).focus();
      return;
    }

}


    let past_address =this.Pastaddress.get('past_address').value;
    let past_street =this.Pastaddress.get('past_street').value;
    let state_province2 =this.Pastaddress.get('state_province2').value;   
    let city_2 =this.Pastaddress.get('city_2').value;  
    let zip_code2 =this.Pastaddress.get('zip_code2').value;
    let county_2 =this.Pastaddress.get('county_2').value;
    let country_2 =this.Pastaddress.get('country_2').value;
    
    if(past_address == null && past_street == null && state_province2 == null && city_2 == null &&  zip_code2 == null && county_2 == null  && country_2 == null){

      //  alert("pls enter all value");
       return;
       }

      else{
  
        if(past_address == null){

          (document.getElementById('errormessage30') as HTMLFormElement).innerHTML = "Enter the Address";
          (document.getElementById('pastaddress_id') as HTMLFormElement).focus();
        }

        else if(past_street == null){

            (document.getElementById('errormessage31') as HTMLFormElement).innerHTML = "Enter the Street";
            (document.getElementById('paststreet_id') as HTMLFormElement).focus();
          }

          else if(state_province2 == null){

            (document.getElementById('errormessage32') as HTMLFormElement).innerHTML = "Enter the State/Province";
            (document.getElementById('paststateprovice_id') as HTMLFormElement).focus();
          }
          else if(city_2 == null){

            (document.getElementById('errormessage33') as HTMLFormElement).innerHTML = "Enter the City";
            (document.getElementById('pastcity_id') as HTMLFormElement).focus();
          }
          else if(zip_code2 == null){

            (document.getElementById('errormessage34') as HTMLFormElement).innerHTML = "Enter the Zipcode";
            (document.getElementById('pastzipcode_id') as HTMLFormElement).focus();
          }
          else if(county_2 == null){

            (document.getElementById('errormessage35') as HTMLFormElement).innerHTML = "Enter the County";
            (document.getElementById('pastcounty_id') as HTMLFormElement).focus();
          }
          else if(country_2 == null){

            (document.getElementById('errormessage36') as HTMLFormElement).innerHTML = "Enter the Country";
            (document.getElementById('pastcountry_id') as HTMLFormElement).focus();
          }

    }
  }


else { 

  let user_name = this.vendorMgmt.get('user_name').value;
  //  let active = this.vendorMgmt.get('active').value;    
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



    if(user_name == null){
            (document.getElementById('errormessage') as HTMLFormElement).innerHTML = "Enter the User Name";
            (document.getElementById('user') as HTMLFormElement).focus();
            return;
          }
      // else if(active == ""){

      //   (document.getElementById('errormessage1') as HTMLFormElement).innerHTML = "Select Vendor Type";
      //   (document.getElementById('errormessage1') as HTMLFormElement).focus();
      //   return;
      // }    
     else if(Legal_business == null){
        (document.getElementById('errormessage2') as HTMLFormElement).innerHTML = "Enter the Legal Business Name";
        (document.getElementById('legalbusiness_id') as HTMLFormElement).focus();
        return;
      }
      else if(federal == null){
        (document.getElementById('errormessage3') as HTMLFormElement).innerHTML = "Enter the Federal EIN";
        (document.getElementById('federal_id') as HTMLFormElement).focus();
        return;
      }
     
      else if(trade_name == null){
        (document.getElementById('errormessage10') as HTMLFormElement).innerHTML = "Enter your Trade Name";
        (document.getElementById('tradename_id') as HTMLFormElement).focus();
        return;
      }
      else if(duns_no == null){
        (document.getElementById('errormessage11') as HTMLFormElement).innerHTML = "Enter the DUNS Number";
        (document.getElementById('dunsno_id') as HTMLFormElement).focus();
        return;
      }
      
      else if(business_website == null){
        (document.getElementById('errormessage18') as HTMLFormElement).innerHTML = "Enter the Business Website";
        (document.getElementById('businesswebsite_id') as HTMLFormElement).focus();
        return;
      }
      else if(physical_address == null){
        (document.getElementById('errormessage4') as HTMLFormElement).innerHTML = "Enter the Current Address";
        (document.getElementById('currentaddress_id') as HTMLFormElement).focus();
        return;
      }
      else if(street == null){
        (document.getElementById('errormessage28') as HTMLFormElement).innerHTML = "Enter the Street";
        (document.getElementById('currentstreet_id') as HTMLFormElement).focus();
        return;
      }
      else if(state_province == null){
        (document.getElementById('errormessage5') as HTMLFormElement).innerHTML = "Select state_province";
        (document.getElementById('stateprovice_id') as HTMLFormElement).focus();
        return;
      }
      else if(city == null){
        (document.getElementById('errormessage6') as HTMLFormElement).innerHTML = "Enter the City";
        (document.getElementById('currentcity_id') as HTMLFormElement).focus();
        return;
      }
      else if(zip_code == null){
        (document.getElementById('errormessage7') as HTMLFormElement).innerHTML = "Enter the Zip Code";
        (document.getElementById('currentzipcode_id') as HTMLFormElement).focus();
        return;
      }
      else if(county == null){
        (document.getElementById('errormessage8') as HTMLFormElement).innerHTML = "Enter the County";
        (document.getElementById('currentcounty_id') as HTMLFormElement).focus();
        return;
      }
      else if(country == null){
        (document.getElementById('errormessage9') as HTMLFormElement).innerHTML = "Enter the Country";
        (document.getElementById('currentcountry_id') as HTMLFormElement).focus();
        return;
      }
      else if(contact_name == null){
        (document.getElementById('errormessage19') as HTMLFormElement).innerHTML = "Enter your Contact Person Name";
        (document.getElementById('contactperson_id') as HTMLFormElement).focus();
        return;
      }
      else if(business_phone == null){
        (document.getElementById('errormessage20') as HTMLFormElement).innerHTML = "Enter the Business Phone";
        (document.getElementById('businessphone_id') as HTMLFormElement).focus();
        return;
      }
      else if(title == null){
        (document.getElementById('errormessage21') as HTMLFormElement).innerHTML = "Enter the Title";
        (document.getElementById('title_id') as HTMLFormElement).focus();
        return;
      }
      else if(business_email == null){
        (document.getElementById('errormessage22') as HTMLFormElement).innerHTML = "Enter the Business Email";
        (document.getElementById('businessemail_id') as HTMLFormElement).focus();
        return;
      }
      else if(!business_email.match(this.mailformat)){
        (document.getElementById('errormessage22') as HTMLFormElement).innerHTML = "Enter the Correct Business Email";
        (document.getElementById('businessemail_id') as HTMLFormElement).focus();
        return;
      }

     
      let addtional_name = this.ContactBusiness.get('addtional_name').value;
      let addtional_title = this.ContactBusiness.get('addtional_title').value;
      let addtional_businessmail = this.ContactBusiness.get('addtional_businessmail').value;
      let addtional_businessphone = this.ContactBusiness.get('addtional_businessphone').value;
  
      if(addtional_name == null && addtional_title == null && addtional_businessmail == null && addtional_businessphone == null){
  
         alert("pls enter all value");
         return;
         }
         
         else{
  
          // alert("hi");
  
           if(addtional_name == null){
            (document.getElementById('errormessage37') as HTMLFormElement).innerHTML = "Enter the Contact Person Name";
            (document.getElementById('addtionalcontactname_id') as HTMLFormElement).focus();
            return;
          }
    
          else if(addtional_title == null){
            (document.getElementById('errormessage38') as HTMLFormElement).innerHTML = "Enter the Title";
            (document.getElementById('addtionaltitle_id') as HTMLFormElement).focus();
            return;
          }
    
          else if(addtional_businessmail == null){
            (document.getElementById('errormessage39') as HTMLFormElement).innerHTML = "Enter the Business Mailid";
            (document.getElementById('addtionalbusinessmail_id') as HTMLFormElement).focus();
            return;
          }
    
          else if(addtional_businessphone == null){
            (document.getElementById('errormessage40') as HTMLFormElement).innerHTML = "Enter the business Phone";
            (document.getElementById('addtionalbusinessphone_id') as HTMLFormElement).focus();
            return;
          }
         }


    let mailing_address =this.mailingaddress.get('mailing_address').value;
    let mailing_street = this.mailingaddress.get('mailing_street').value;
    let state_province1 = this.mailingaddress.get('state_province1').value;
    let city_1 = this.mailingaddress.get('city_1').value;
    let zip_code1 = this.mailingaddress.get('zip_code1').value;
    let county_1 = this.mailingaddress.get('county_1').value;
    let country_1 = this.mailingaddress.get('country_1').value;


  

  if(mailing_address == null && mailing_street == null && state_province1 == null && city_1 == null &&  zip_code1 == null && county_1 == null  && country_1 == null){

  //  alert("pls enter all value");
   return;
   }
    
else {
// alert("hi")

if( mailing_address == null){

  // alert("hi");
    (document.getElementById('errormessage12') as HTMLFormElement).innerHTML = "Enter the Mailing Address";
    (document.getElementById('mailingaddress_id') as HTMLFormElement).focus();
    return;
}

else if(mailing_street == null){

  (document.getElementById('errormessage29') as HTMLFormElement).innerHTML = "Enter the  Street Address";
   (document.getElementById('mailingstreet_id') as HTMLFormElement).focus();
   return;
}

else if(state_province1 == null){

     (document.getElementById('errormessage13') as HTMLFormElement).innerHTML = "Select State/Province";
      (document.getElementById('mailingstateprovince_id') as HTMLFormElement).focus();
      return;
}
else if(city_1 == null){
      (document.getElementById('errormessage14') as HTMLFormElement).innerHTML = "Enter the City";
      (document.getElementById('mailingcity_id') as HTMLFormElement).focus();
      return;
    }
  else if(zip_code1 == null){
      (document.getElementById('errormessage15') as HTMLFormElement).innerHTML = "Enter the Zip Code";
      (document.getElementById('mailingzipcode_id') as HTMLFormElement).focus();
      return;
    }
    else if(county_1 == null){
      (document.getElementById('errormessage16') as HTMLFormElement).innerHTML = "Enter the County";
      (document.getElementById('mailingcounty_id') as HTMLFormElement).focus();
      return;
    }
    else if(country_1 == null){
      (document.getElementById('errormessage17') as HTMLFormElement).innerHTML = "Enter the Country";
      (document.getElementById('mailingcountry_id') as HTMLFormElement).focus();
      return;
    }

}


    let past_address =this.Pastaddress.get('past_address').value;
    let past_street =this.Pastaddress.get('past_street').value;
    let state_province2 =this.Pastaddress.get('state_province2').value;   
    let city_2 =this.Pastaddress.get('city_2').value;  
    let zip_code2 =this.Pastaddress.get('zip_code2').value;
    let county_2 =this.Pastaddress.get('county_2').value;
    let country_2 =this.Pastaddress.get('country_2').value;
    
    if(past_address == null && past_street == null && state_province2 == null && city_2 == null &&  zip_code2 == null && county_2 == null  && country_2 == null){

      //  alert("pls enter all value");
       return;
       }

      else{
  
        if(past_address == null){

          (document.getElementById('errormessage30') as HTMLFormElement).innerHTML = "Enter the Address";
          (document.getElementById('pastaddress_id') as HTMLFormElement).focus();
        }

        else if(past_street == null){

            (document.getElementById('errormessage31') as HTMLFormElement).innerHTML = "Enter the Street";
            (document.getElementById('paststreet_id') as HTMLFormElement).focus();
          }

          else if(state_province2 == null){

            (document.getElementById('errormessage32') as HTMLFormElement).innerHTML = "Enter the State/Province";
            (document.getElementById('paststateprovice_id') as HTMLFormElement).focus();
          }
          else if(city_2 == null){

            (document.getElementById('errormessage33') as HTMLFormElement).innerHTML = "Enter the City";
            (document.getElementById('pastcity_id') as HTMLFormElement).focus();
          }
          else if(zip_code2 == null){

            (document.getElementById('errormessage34') as HTMLFormElement).innerHTML = "Enter the Zipcode";
            (document.getElementById('pastzipcode_id') as HTMLFormElement).focus();
          }
          else if(county_2 == null){

            (document.getElementById('errormessage35') as HTMLFormElement).innerHTML = "Enter the County";
            (document.getElementById('pastcounty_id') as HTMLFormElement).focus();
          }
          else if(country_2 == null){

            (document.getElementById('errormessage36') as HTMLFormElement).innerHTML = "Enter the Country";
            (document.getElementById('pastcountry_id') as HTMLFormElement).focus();
          }

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
