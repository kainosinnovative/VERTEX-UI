import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  is_business:any = "individual";
//  is_individual:any = "business";
 mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  Userdata(){

    

    if(this.is_business == 'individual'){
      // alert(this.is_business);

      let user_name = (<HTMLInputElement>document.getElementById("user_name")).value;
      let active = (<HTMLInputElement>document.getElementById("active")).value;
    let first_name = (<HTMLInputElement>document.getElementById("first_name")).value;
    let last_name = (<HTMLInputElement>document.getElementById("last_name")).value;
    let middle_name = (<HTMLInputElement>document.getElementById("middle_name")).value;
    let social_no = (<HTMLInputElement>document.getElementById("social_no")).value;
    let email_individual = (<HTMLInputElement>document.getElementById("email_individual")).value;
    let phone_no = (<HTMLInputElement>document.getElementById("phone_no")).value;

    let physical_address = (<HTMLInputElement>document.getElementById("physical_address")).value;
  let state_province = (<HTMLInputElement>document.getElementById("state_province")).value;
  let city = (<HTMLInputElement>document.getElementById("city")).value;
  let zip_code = (<HTMLInputElement>document.getElementById("zip_code")).value;
  let county = (<HTMLInputElement>document.getElementById("county")).value;
  let country = (<HTMLInputElement>document.getElementById("country")).value;

  

    if(user_name == ""){
      (document.getElementById('errormessage') as HTMLFormElement).innerHTML = "Enter the User Name";
      (document.getElementById('errormessage') as HTMLFormElement).focus();
      return;
    }
    else if(active == ""){

      (document.getElementById('errormessage1') as HTMLFormElement).innerHTML = "Select Vendor Type";
      (document.getElementById('errormessage1') as HTMLFormElement).focus();
    }
    else if(first_name == ""){
      (document.getElementById('errormessage52') as HTMLFormElement).innerHTML = "Enter the First Name";
      (document.getElementById('errormessage52') as HTMLFormElement).focus();
    }
    else if(last_name == ""){
      (document.getElementById('errormessage23') as HTMLFormElement).innerHTML = "Enter the Last Name";
      (document.getElementById('errormessage23') as HTMLFormElement).focus();
    }
    else if(middle_name == ""){
      (document.getElementById('errormessage24') as HTMLFormElement).innerHTML = "Enter the Middle Name";
      (document.getElementById('errormessage24') as HTMLFormElement).focus();
    }
    else if(social_no == ""){
      (document.getElementById('errormessage25') as HTMLFormElement).innerHTML = "Enter the Social Security Number";
      (document.getElementById('errormessage25') as HTMLFormElement).focus();
    }
    else if(email_individual == ""){
      (document.getElementById('errormessage26') as HTMLFormElement).innerHTML = "Enter the Email";
      (document.getElementById('errormessage26') as HTMLFormElement).focus();
    }
    
    else if (!email_individual.match(this.mailformat)) {
      (document.getElementById('errormessage26') as HTMLFormElement).innerHTML = "Enter the Correct Emailid";
      (document.getElementById('errormessage26') as HTMLFormElement).focus();
    }

    else if(phone_no == ""){
      (document.getElementById('errormessage27') as HTMLFormElement).innerHTML = "Enter the Phone";
      (document.getElementById('errormessage27') as HTMLFormElement).focus();
    }
    else if(physical_address == ""){
      (document.getElementById('errormessage4') as HTMLFormElement).innerHTML = "Enter the Physical Address";
      (document.getElementById('errormessage4') as HTMLFormElement).focus();
    }
    else if(state_province == ""){
      (document.getElementById('errormessage5') as HTMLFormElement).innerHTML = "Select state_province";
      (document.getElementById('errormessage5') as HTMLFormElement).focus();
    }
    else if(city == ""){
      (document.getElementById('errormessage6') as HTMLFormElement).innerHTML = "Enter the City";
      (document.getElementById('errormessage6') as HTMLFormElement).focus();
    }
    else if(zip_code == ""){
      (document.getElementById('errormessage7') as HTMLFormElement).innerHTML = "Enter the Zip Code";
      (document.getElementById('errormessage7') as HTMLFormElement).focus();
    }
    else if(county == ""){
      (document.getElementById('errormessage8') as HTMLFormElement).innerHTML = "Enter the County";
      (document.getElementById('errormessage8') as HTMLFormElement).focus();
    }
    else if(country == ""){
      (document.getElementById('errormessage9') as HTMLFormElement).innerHTML = "Enter the Country";
      (document.getElementById('errormessage9') as HTMLFormElement).focus();
    }

    let mailing_address = (<HTMLInputElement>document.getElementById("mailing_address")).value;
  let state_province1 = (<HTMLInputElement>document.getElementById("state_province1")).value;
  let city_1 = (<HTMLInputElement>document.getElementById("city_1")).value;
  let zip_code1 = (<HTMLInputElement>document.getElementById("zip_code1")).value;
  let county_1 = (<HTMLInputElement>document.getElementById("county_1")).value;
  let country_1 = (<HTMLInputElement>document.getElementById("country_1")).value;

   if(mailing_address == "" && state_province1 == "" && city_1 == "" && zip_code1 =="" && county_1 =="" && country_1 ==""){

  //  alert("pls enter all value");

    }
    
else{


if( mailing_address == ""){

  // alert("hi");
    (document.getElementById('errormessage12') as HTMLFormElement).innerHTML = "Enter the Mailing Address";
    (document.getElementById('errormessage12') as HTMLFormElement).focus();
}

else if(state_province1 == ""){

     (document.getElementById('errormessage13') as HTMLFormElement).innerHTML = "Select State/Province";
      (document.getElementById('errormessage13') as HTMLFormElement).focus();
}
else if(city_1 == ""){
      (document.getElementById('errormessage14') as HTMLFormElement).innerHTML = "Enter the City";
      (document.getElementById('errormessage14') as HTMLFormElement).focus();
    }
  else if(zip_code1 == ""){
      (document.getElementById('errormessage15') as HTMLFormElement).innerHTML = "Enter the Zip Code";
      (document.getElementById('errormessage15') as HTMLFormElement).focus();
    }
    else if(county_1 == ""){
      (document.getElementById('errormessage16') as HTMLFormElement).innerHTML = "Enter the County";
      (document.getElementById('errormessage16') as HTMLFormElement).focus();
    }
    else if(country_1 == ""){
      (document.getElementById('errormessage17') as HTMLFormElement).innerHTML = "Enter the Country";
      (document.getElementById('errormessage17') as HTMLFormElement).focus();
    }

}
    // else if(mailing_address == ""){
    //   (document.getElementById('errormessage12') as HTMLFormElement).innerHTML = "Enter the Mailing Address";
    //   (document.getElementById('errormessage12') as HTMLFormElement).focus();
    // }
    // else if(state_province1 == ""){
    //   (document.getElementById('errormessage13') as HTMLFormElement).innerHTML = "Select State/Province";
    //   (document.getElementById('errormessage13') as HTMLFormElement).focus();
    // }
    // else if(city_1 == ""){
    //   (document.getElementById('errormessage14') as HTMLFormElement).innerHTML = "Enter the City";
    //   (document.getElementById('errormessage14') as HTMLFormElement).focus();
    // }
    // else if(zip_code1 == ""){
    //   (document.getElementById('errormessage15') as HTMLFormElement).innerHTML = "Enter the Zip Code";
    //   (document.getElementById('errormessage15') as HTMLFormElement).focus();
    // }
    // else if(county_1 == ""){
    //   (document.getElementById('errormessage16') as HTMLFormElement).innerHTML = "Enter the County";
    //   (document.getElementById('errormessage16') as HTMLFormElement).focus();
    // }
    // else if(country_1 == ""){
    //   (document.getElementById('errormessage17') as HTMLFormElement).innerHTML = "Enter the Country";
    //   (document.getElementById('errormessage17') as HTMLFormElement).focus();
    // }
  }

// else 
else { 

//  alert("in");
let user_name = (<HTMLInputElement>document.getElementById("user_name")).value;
      let active = (<HTMLInputElement>document.getElementById("active")).value;
  let Legal_business = (<HTMLInputElement>document.getElementById("business_name")).value;
  let federal = (<HTMLInputElement>document.getElementById("federal")).value;
  let trade_name = (<HTMLInputElement>document.getElementById("trade_name")).value;
  let duns_no = (<HTMLInputElement>document.getElementById("duns_no")).value;
  let business_website = (<HTMLInputElement>document.getElementById("business_website")).value;

  let physical_address = (<HTMLInputElement>document.getElementById("physical_address")).value;
  let state_province = (<HTMLInputElement>document.getElementById("state_province")).value;
  let city = (<HTMLInputElement>document.getElementById("city")).value;
  let zip_code = (<HTMLInputElement>document.getElementById("zip_code")).value;
  let county = (<HTMLInputElement>document.getElementById("county")).value;
  let country = (<HTMLInputElement>document.getElementById("country")).value;


  let contact_name = (<HTMLInputElement>document.getElementById("contact_name")).value;
  let business_phone = (<HTMLInputElement>document.getElementById("business_phone")).value;
  let title = (<HTMLInputElement>document.getElementById("title")).value;
  let business_email = (<HTMLInputElement>document.getElementById("business_email")).value;


     if(user_name == ""){
        (document.getElementById('errormessage') as HTMLFormElement).innerHTML = "Enter the User Name";
        (document.getElementById('errormessage') as HTMLFormElement).focus();
      }
      else if(active == ""){

        (document.getElementById('errormessage1') as HTMLFormElement).innerHTML = "Select Vendor Type";
        (document.getElementById('errormessage1') as HTMLFormElement).focus();
      }    
     else if(Legal_business == ""){
        (document.getElementById('errormessage2') as HTMLFormElement).innerHTML = "Enter the Legal Business Name";
        (document.getElementById('errormessage2') as HTMLFormElement).focus();
      }
      else if(federal == ""){
        (document.getElementById('errormessage3') as HTMLFormElement).innerHTML = "Enter the Federal EIN";
        (document.getElementById('errormessage3') as HTMLFormElement).focus();
      }
     
      else if(trade_name == ""){
        (document.getElementById('errormessage10') as HTMLFormElement).innerHTML = "Enter your Trade Name";
        (document.getElementById('errormessage10') as HTMLFormElement).focus();
      }
      else if(duns_no == ""){
        (document.getElementById('errormessage11') as HTMLFormElement).innerHTML = "Enter the DUNS Number";
        (document.getElementById('errormessage11') as HTMLFormElement).focus();
      }
      
      else if(business_website == ""){
        (document.getElementById('errormessage18') as HTMLFormElement).innerHTML = "Enter the Business Website";
        (document.getElementById('errormessage18') as HTMLFormElement).focus();
      }
      else if(physical_address == ""){
        (document.getElementById('errormessage4') as HTMLFormElement).innerHTML = "Enter the Current Address";
        (document.getElementById('errormessage4') as HTMLFormElement).focus();
      }
      else if(state_province == ""){
        (document.getElementById('errormessage5') as HTMLFormElement).innerHTML = "Select state_province";
        (document.getElementById('errormessage5') as HTMLFormElement).focus();
      }
      else if(city == ""){
        (document.getElementById('errormessage6') as HTMLFormElement).innerHTML = "Enter the City";
        (document.getElementById('errormessage6') as HTMLFormElement).focus();
      }
      else if(zip_code == ""){
        (document.getElementById('errormessage7') as HTMLFormElement).innerHTML = "Enter the Zip Code";
        (document.getElementById('errormessage7') as HTMLFormElement).focus();
      }
      else if(county == ""){
        (document.getElementById('errormessage8') as HTMLFormElement).innerHTML = "Enter the County";
        (document.getElementById('errormessage8') as HTMLFormElement).focus();
      }
      else if(country == ""){
        (document.getElementById('errormessage9') as HTMLFormElement).innerHTML = "Enter the Country";
        (document.getElementById('errormessage9') as HTMLFormElement).focus();
      }
      else if(contact_name == ""){
        (document.getElementById('errormessage19') as HTMLFormElement).innerHTML = "Enter your Contact Person Name";
        (document.getElementById('errormessage19') as HTMLFormElement).focus();
      }
      else if(business_phone == ""){
        (document.getElementById('errormessage20') as HTMLFormElement).innerHTML = "Enter the Business Phone";
        (document.getElementById('errormessage20') as HTMLFormElement).focus();
      }
      else if(title == ""){
        (document.getElementById('errormessage21') as HTMLFormElement).innerHTML = "Enter the Title";
        (document.getElementById('errormessage21') as HTMLFormElement).focus();
      }
      else if(business_email == ""){
        (document.getElementById('errormessage22') as HTMLFormElement).innerHTML = "Enter the Business Email";
        (document.getElementById('errormessage22') as HTMLFormElement).focus();
      }
      else if(!business_email.match(this.mailformat)){
        (document.getElementById('errormessage22') as HTMLFormElement).innerHTML = "Enter the Correct Business Email";
        (document.getElementById('errormessage22') as HTMLFormElement).focus();
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
// alert(this.is_business);
     (<HTMLInputElement>document.getElementById("General_Information")).style.display ="block";
    (<HTMLInputElement>document.getElementById("address_information")).style.display ="block";
    (<HTMLInputElement>document.getElementById("contact_inforation")).style.display ="block";
    (<HTMLInputElement>document.getElementById("vendor-individual")).style.display ="none";
    
  }
  else{

    // alert("test");
    this.is_business = 'individual';
    (<HTMLInputElement>document.getElementById("vendor-individual")).style.display ="block";
    (<HTMLInputElement>document.getElementById("address_information")).style.display ="block";
    (<HTMLInputElement>document.getElementById("General_Information")).style.display ="none";
    (<HTMLInputElement>document.getElementById("contact_inforation")).style.display ="none";
    
  }

}
 
mailingaddress(){

  // alert("hi");

  

}

}
