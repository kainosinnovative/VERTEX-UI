import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { config_url } from '../shared/constant';
// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 registercontactinformation:any;
  vendor: any;
  employeeinformation:any;
  jobdetail: any;
  jobtitle: any;
  employeedetail: any;
  employeetype: any;
  statetype:any;
  // statedetail:any;
  userdata:any;
  usertypedata:any;
  selectedStateObj:any;
  // citytype:any;
  // citydetail:any;
  zipcodelist:any;
  zipcodedetail: any;
  overalldata: any;
  countrytype: any;
  countrydetail: any;
  beclassificationtype: any;
  beclassificationdetail:any;
  citylist: any;
  cityalldetail:any;
  statedetails:any;
  vendordatalist: any;
  vendoralllist: any;


  constructor(private frmbuilder: FormBuilder,  private http: HttpClient, 
  //  private toastr: ToastrService
    ) { }

  ngOnInit(): void {

    this.gejobtitledata();
    this.getemployeedata();
    this.getusertypedata();
    // this.getcountrydata();
    this.getbeclassificationdata();
    this.Getcityall_list();
    // this.getvendorlist()

    this.registercontactinformation = this.frmbuilder.group({

      FirstName: [],
      LastName: [],
      UserTypeId: [],
      UserId: [],
      UserPassword: [],
      conformpassword: [],

      Address1: [],
      Address2: [],
      StateId: [],
       CityId: [],
      Zipcode: [],
      county_name: [],
      CountryId: [],
      StartDate:[],
      EndDate:[],
      VendorTypeId: [],
      EIN_SSN:[],
     

      OutreachEmailOptIn:[],
      BusinessSize: [],
      BusinessRegisteredInDistrict:[],
      BusinessIsFranchisee: [],
      BEClassificationId: [],

      JobTitleId:[],
      EmploymentTypeId:[],
      JobStartDate: [],
      BusinessRegisteredInSCC: [],
     
      Phone:[],
      AdminUser: [],
      UserStatusId:['N'],
      // AEndDate: ['2022-06-30'],

})

// this. employeeinformation = this.frmbuilder.group({

//  })

}

phoneformat= /^[0-9]{10}$/;
socialno =  /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
useridmatch=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

alpha(event: any){
  var inp = String.fromCharCode(event.keyCode);

if (/[a-zA-Z]/.test(inp)) {
  return true;
} else {
  event.preventDefault();
  return false;
}
}
alphanumeric(event: any){
  var inp = String.fromCharCode(event.keyCode);
  if (/[a-zA-Z0-9]/.test(inp)) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
}
number(event: any) {
  var charCode = (event.which) ? event.which : event.keyCode;
  
  if ((charCode < 48 || charCode > 57)) {
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}

  validation(registercontactinformation:any){
    // this.toastr.error("Holiday deleted");
    console.log( 'Contact Information',registercontactinformation);
    // console.log('employee', employeeinformation);
    // console.log("insert");
    //   this.http.post("http://localhost/VERTEX-PHP-API/"+'vendor/AdduserDetails', registercontactinformation).subscribe(
      
    //     data => {
    //       console.log("data");
    //         console.log('POST Request is successful >>>>>>>>', data);
  
    //     },
    //     success => {
    //       console.log("success");
    //     }
    //   );

    let FirstName = this.registercontactinformation.get('FirstName').value;
    let LastName = this.registercontactinformation.get('LastName').value;
    let UserTypeId = this.registercontactinformation.get('UserTypeId').value;
    // alert(UserTypeId);
    let UserId = this.registercontactinformation.get('UserId').value;
    let UserPassword = this.registercontactinformation.get('UserPassword').value;
    let conformpassword = this.registercontactinformation.get('conformpassword').value;
   


    let Address1 = this.registercontactinformation.get('Address1').value;
    let Address2 = this.registercontactinformation.get('Address2').value;
    let StateId = this.registercontactinformation.get('StateId').value;
    let CityId = this.registercontactinformation.get('CityId').value;
    let Zipcode = this.registercontactinformation.get('Zipcode').value;
    let county_name = this.registercontactinformation.get('county_name').value;
    let CountryId = this.registercontactinformation.get('CountryId').value;
    let StartDate = this.registercontactinformation.get('StartDate').value;
    let EndDate = this.registercontactinformation.get('EndDate').value;
    

    let active1 = (<HTMLInputElement>document.getElementById("active")).checked;

    let EIN_SSN = this.registercontactinformation.get('EIN_SSN').value;
    let BusinessSize = this.registercontactinformation.get('BusinessSize').value;
    let BusinessRegisteredInDistrict = this.registercontactinformation.get('BusinessRegisteredInDistrict').value;
    let BEClassificationId = this.registercontactinformation.get('BEClassificationId').value;
    let BusinessRegisteredInSCC = this.registercontactinformation.get('BusinessRegisteredInSCC').value;
    let BusinessIsFranchisee = this.registercontactinformation.get('BusinessIsFranchisee').value;

    let JobTitleId = this.registercontactinformation.get('JobTitleId').value;
    let EmploymentTypeId = this.registercontactinformation.get('EmploymentTypeId').value;
    let JobStartDate = this.registercontactinformation.get('JobStartDate').value;
    
    let Phone = this.registercontactinformation.get('Phone').value;


    let usertype_id = (<HTMLInputElement>document.getElementById("usertype_id")).value;

    if(FirstName == null || FirstName == "")
      {
       (document.getElementById('firstname_id') as HTMLFormElement).classList.add("validation");
     }

    if(LastName == null || LastName == "") 
      {
      (document.getElementById('lastname_id') as HTMLFormElement).classList.add("validation");
     }

     if(UserTypeId == null || UserTypeId == "")
     {
     (document.getElementById('usertype_id') as HTMLFormElement).classList.add("validation");
      }
      if(UserId == null || UserId == "")
     {
      (document.getElementById('userkey') as HTMLFormElement).classList.add("validation");
      }
     if(UserPassword == null || UserPassword == "")
     {
      (document.getElementById('userpswd_id') as HTMLFormElement).classList.add("validation");
      }
      if(conformpassword == null || conformpassword == "")
     {
      (document.getElementById('comformpswd_id') as HTMLFormElement).classList.add("validation");
      }
      
      if(Address1 == null || Address1 == "")
      {
       (document.getElementById('currentadd_id') as HTMLFormElement).classList.add("validation");
       }
       if(Address2 == null || Address2 == "")
       {
        (document.getElementById('currentsecadd_id') as HTMLFormElement).classList.add("validation");
        }
       
         if(Zipcode == null || Zipcode == "")
        {
         (document.getElementById('regcurrentzip_id') as HTMLFormElement).classList.add("validation");
         }
         if(CityId == null || CityId == "")
        {
         (document.getElementById('currentcity_id') as HTMLFormElement).classList.add("validation");
         }
         if(StateId == null || StateId == "")
         {
          (document.getElementById('curstate_id') as HTMLFormElement).classList.add("validation");
          }
         if(county_name == null || county_name == "")
         {
          (document.getElementById('county_id') as HTMLFormElement).classList.add("validation");
          }
          if(CountryId == null || CountryId =="")
          {
           (document.getElementById('country_id') as HTMLFormElement).classList.add("validation");
           }
           if(StartDate == null || StartDate == "")
           {
            (document.getElementById('startdate_id') as HTMLFormElement).classList.add("validation");
            }
            if(EndDate == null || EndDate == "")
            {
             (document.getElementById('enddata_id') as HTMLFormElement).classList.add("validation");
             }

           if(!UserId.match(this.useridmatch)){

            (document.getElementById('userkey') as HTMLFormElement).classList.add("validation");
          }

     if(UserPassword != (conformpassword)){

      (document.getElementById('comformpswd_id') as HTMLFormElement).classList.add("validation");

      (document.getElementById('passvalidationid') as HTMLFormElement).innerText = 'Passwords must match.!'
    }


    if(usertype_id == "EMPLOY"){
    

      if(JobTitleId == null || JobTitleId == "")
      {
       (document.getElementById('job_title') as HTMLFormElement).classList.add("validation");
       }
       if(EmploymentTypeId == null || EmploymentTypeId == "")
      {
       (document.getElementById('employee_id') as HTMLFormElement).classList.add("validation");
       }
       if(JobStartDate == null || JobStartDate == "")
       {
        (document.getElementById('jobstartdate_id') as HTMLFormElement).classList.add("validation");
        }
       if(Phone == null || Phone == "")
      {
       (document.getElementById('phoneno_id') as HTMLFormElement).classList.add("validation");
       }
     
     else{
// alert('test');
      // (document.getElementById('job_title') as HTMLFormElement).classList.remove("validation");
     }  

    }

    if(usertype_id == "VENDOR"){

   if(active1 == false){

  if(EIN_SSN == null || EIN_SSN == ""){
      (document.getElementById('socialno_id') as HTMLFormElement).classList.add("validation");
    }

    }
   

    else{

      if(BusinessSize == null || BusinessSize == ""){
        (document.getElementById('business_id') as HTMLFormElement).classList.add("validation");
      }
     if(BEClassificationId == null || BEClassificationId == ""){
        (document.getElementById('be_classificationid') as HTMLFormElement).classList.add("validation");
      }
        
      }
      }

      if((FirstName != null || FirstName != "") && (LastName != null || LastName != "") && (UserId != null || UserId != "") && (UserPassword != null || UserPassword != "") && (Address1 != null || Address1 != "") && (Address2 != null || Address2 != "") && (StateId != null || StateId != "") && 
        (CityId != null || CityId != "") && (Zipcode != null || Zipcode != "") && (CountryId != null || CountryId != "") && (StartDate != null || StartDate != "") && (EndDate != null || EndDate != "")){
        
          
          // if(usertype_id == "OTHER"){

          //   if((FirstName != null || FirstName != "") && (LastName != null || LastName != "") && (UserId != null || UserId != "") && (UserPassword != null || UserPassword != "") && (Address1 != null || Address1 != "") && (Address2 != null || Address2 != "") && (StateId != null || StateId != "") && 
          //   (CityId != null || CityId != "") && (Zipcode != null || Zipcode != "") && (CountryId != null || CountryId != "")){
    
          //     this.http.post("http://localhost/VERTEX-PHP-API/"+'vendor/AdduserDetails', this.registercontactinformation).subscribe(
          
          //       data => {
          //         console.log("data");
          //           console.log('POST Request is successful >>>>>>>>', data);
          
          //       },
          //       success => {
          //         console.log("success");
          //       }
          //     );
    
          //   }
            
          // }


          if(usertype_id == "EMPLOY"){
            
            if((JobTitleId != null) && (EmploymentTypeId != null) && (JobStartDate != null) && (Phone != null) ){
            // if((JobTitleId != null || JobTitleId != "") && (EmploymentTypeId != null || EmploymentTypeId != "") && (JobStartDate != null || JobStartDate != "") && (Phone != null || Phone != "") ){
              // alert("JobTitleId>>>"+JobTitleId);
              // alert("Emp in");
              this.http.post("http://localhost/VERTEX-PHP-API/"+'vendor/AdduserDetails', registercontactinformation).subscribe(
          
                data => {
                  console.log("data");
                    console.log('POST Request is successful >>>>>>>>', data);
          
                },
                success => {
                  console.log("success");
                }
              );
              window.setTimeout(function(){location.reload()},100);
            }
            
          }



          if(usertype_id == "VENDOR"){
            

            if(active1 == false){

              if((EIN_SSN != null) && (StartDate != null) && (EndDate != null)){
                alert("vendor individual");
                this.http.post("http://localhost/VERTEX-PHP-API/"+'vendor/AdduserDetails', registercontactinformation).subscribe(
          
                data => {
                  console.log("data");
                    console.log('POST Request is successful >>>>>>>>', data);
          
                },
                success => {
                  console.log("success");
                }
              );
              window.setTimeout(function(){location.reload()},100);
            }
           if(!EIN_SSN.match(this.socialno)){
                 (document.getElementById('socialno_id') as HTMLFormElement).classList.add("validation");
                }
              }
            }

            if(usertype_id == "VENDOR"){
              

              if(active1 == true){

              if((BusinessSize != null) && (BusinessRegisteredInDistrict != null)&& (BusinessRegisteredInSCC != null) && (BusinessIsFranchisee != null) && (BEClassificationId != null) && (StartDate != null) && (EndDate != null)){
                // alert("vendor business");
                
                this.http.post("http://localhost/VERTEX-PHP-API/"+'vendor/AdduserDetails', registercontactinformation).subscribe(
          
                data => {
                  console.log("data");
                    console.log('POST Request is successful >>>>>>>>', data);
          
                },
                success => {
                  console.log("success");
                }
              );
              window.setTimeout(function(){location.reload()},100);
            }
          }
              }


            }


      //        }
          

      }

  inputErrorMessage(errormessage: any) {

    (document.getElementById(errormessage) as HTMLFormElement).classList.remove("validation");
  
    }

    inputErrorMessage1(errormessage: any) {

      (document.getElementById('passvalidationid') as HTMLFormElement).innerText = 'Passwords must match.!'
    
      }

    vendortype_display(active:any){

      // (document.getElementById('job_title') as HTMLFormElement).value="";

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
      // alert(usertype_id);
     
      if(usertype_id == 'VENDOR'){

        (<HTMLInputElement>document.getElementById("vendordetails")).style.display ="block";
        (<HTMLInputElement>document.getElementById("employeeinfo")).style.display ="none";
      }
    else  if(usertype_id == 'EMPLOY'){
        (<HTMLInputElement>document.getElementById("employeeinfo")).style.display ="block";
        (<HTMLInputElement>document.getElementById("vendordetails")).style.display ="none";
       }

      else {
        (<HTMLInputElement>document.getElementById("vendordetails")).style.display ="none";
        (<HTMLInputElement>document.getElementById("employeeinfo")).style.display ="none";
      }

      if(usertype_id == 'EMPLOY'){

        (document.getElementById('socialno_id') as HTMLFormElement).classList.remove("validation");
        (document.getElementById('business_id') as HTMLFormElement).classList.remove("validation");
        (document.getElementById('be_classificationid') as HTMLFormElement).classList.remove("validation");

      }
      else if(usertype_id == 'VENDOR'){

        (document.getElementById('job_title') as HTMLFormElement).classList.remove("validation");
        (document.getElementById('employee_id') as HTMLFormElement).classList.remove("validation");
        (document.getElementById('jobstartdate_id') as HTMLFormElement).classList.remove("validation");
        (document.getElementById('phoneno_id') as HTMLFormElement).classList.remove("validation");
      }

      else if(usertype_id == 'OTHER'){

        (document.getElementById('socialno_id') as HTMLFormElement).classList.remove("validation");
        (document.getElementById('business_id') as HTMLFormElement).classList.remove("validation");
        (document.getElementById('be_classificationid') as HTMLFormElement).classList.remove("validation");
        (document.getElementById('job_title') as HTMLFormElement).classList.remove("validation");
        (document.getElementById('employee_id') as HTMLFormElement).classList.remove("validation");
        (document.getElementById('jobstartdate_id') as HTMLFormElement).classList.remove("validation");
        (document.getElementById('phoneno_id') as HTMLFormElement).classList.remove("validation");
      }

    }

    displaydata(){

      let usertype_id = (<HTMLInputElement>document.getElementById("usertype_id")).value;

      if(usertype_id == 'VENDOR'){

        (<HTMLInputElement>document.getElementById("display_startdata")).style.display ="block";
        (<HTMLInputElement>document.getElementById("display_enddata")).style.display ="block";

      }
      else if(usertype_id == 'EMPLOY'){
        (<HTMLInputElement>document.getElementById("display_startdata")).style.display ="block";
        (<HTMLInputElement>document.getElementById("display_enddata")).style.display ="none";
      }

    }

    gejobtitledata(){
     
      console.log('in');
      // alert('in');
      this.http.get(config_url+'/employee/selectJobTitle').subscribe( (data: {}) => {
          this.jobtitle=data;
          this.jobdetail=this.jobtitle.data.JobTitle;
            
    });
    }

    getemployeedata(){
      
      console.log('in');
      // alert('in');
      this.http.get(config_url+'/employee/selectEmployeeType').subscribe(
        (employeedata: {}) => {
          this.employeetype=employeedata;
          this.employeedetail=this.employeetype.data.EmployeeDetails;
     });
    }

    getusertypedata(){
      
      console.log('in');
      // alert('in');
      this.http.get(config_url+'/app/selectUserType').subscribe(
        (usertype: {}) => {
          this.userdata=usertype;
          this.usertypedata=this.userdata.data.UserTypeDetails;
                // console.log("usertypedata>>>",this.usertypedata)
    });
    }

    // getvendorlist(){
      
    //   this.http.get(config_url+'/vendor/GetVendorType').subscribe(
    //     (vendordata: {}) => {

    //       // console.log(vendordata)
         
    //       this.vendordatalist = vendordata;
    //       this.vendoralllist = this.vendordatalist.data.vendortype
    //    console.log(this.vendoralllist.VendorTypeId);
       
    // });

    // }
  

      // getcountrydata(){

      // let curstate_id = (<HTMLInputElement>document.getElementById("curstate_id")).value;
      // alert(curstate_id);

      // // this.http.get(config_url+'/app/getCountryByState?stateid='+countryid).subscribe(
      // //     (countrydata: {}) => {
           
      // //       this.countrytype = countrydata;
      // //       this.countrydetail = this.countrytype.data.CountryDetails
      // //       console.log("country",this.countrydetail);
      // // });
      // }

      getbeclassificationdata(){
        console.log("in");
        // alert('in');
        this.http.get(config_url+'/app/selectBEClassification').subscribe(
          (beclassificationdata: {}) => {
           
            this.beclassificationtype = beclassificationdata;
            this.beclassificationdetail = this.beclassificationtype.data.BEClassification
            // console.log("country",countrydata)
      });
      }

       Getcityall_list(){

        console.log('in');
        // alert('in');

        this.http.get(config_url+'/app/selectAllcity').subscribe(
              (citylist: {}) => {
              //  console.log( 'citylist', citylist);
    
                this.citylist=citylist;
                 this.cityalldetail=this.citylist.data.citydetails;
                //  console.log(this.cityalldetail)
    
              });

      }

      onchangezip(){

        let cityid = (<HTMLInputElement>document.getElementById("currentcity_id")).value;

        this.http.get(config_url+'/app/getZipcodeByCity?cityid='+cityid).subscribe(data1 =>
          {

            // console.log(data1);
            this.zipcodelist=data1;
            this.zipcodedetail=this.zipcodelist.data.zipcodedata;
            // console.log( 'zipcode', this.zipcodedetail)
          })

      }

      onchangestate(){

        let cityid = (<HTMLInputElement>document.getElementById("currentcity_id")).value;

        this.http.get(config_url+'/app/getdistrictstatebycity?cityid='+cityid).subscribe(statelist =>
          {

            console.log(statelist);
            this.statedetails=statelist;
            this.statetype=this.statedetails.data.Statelist;
            // console.log( 'zipcode', this.zipcodedetail)
          })

      }

      onchangecountry(){
       
        let state_id = (<HTMLInputElement>document.getElementById("curstate_id")).value;

        this.http.get(config_url+'/app/getCountryByState?stateid='+state_id).subscribe(countrydata =>
          {

            // console.log( 'country',countrydata);
            this.countrytype = countrydata;
            this.countrydetail = this.countrytype.data.countrydata
            // console.log( 'zipcode', this.countrydetail)
          })


      }

    // inputErrorMessage1(phoneErr: any){
    //   (document.getElementById(phoneErr) as HTMLFormElement).innerHTML = "";
    // }

    removepassvalidation(){
      // alert('in');
      (document.getElementById('passvalidationid') as HTMLFormElement).innerText = "";
    }
}
