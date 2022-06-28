import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { config_url } from '../shared/constant';

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
  statedetail:any;


  constructor(private frmbuilder: FormBuilder,  private http: HttpClient) { }

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

this. employeeinformation = this.frmbuilder.group({
  jobtitle:[],
  employeeid:[],
  startdate:[],
  phoneno:[]
 })

}

phoneformat= /^[0-9]{10}$/;

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

    let active1 = (<HTMLInputElement>document.getElementById("active")).checked;

    let socialno_name = this.registercontactinformation.get('socialno_name').value;
    let businesssize_name = this.registercontactinformation.get('businesssize_name').value;
    let be_classificationname = this.registercontactinformation.get('be_classificationname').value;

    let jobtitle = this.employeeinformation.get('jobtitle').value;
    let employeeid = this.employeeinformation.get('employeeid').value;
    let startdate = this.employeeinformation.get('startdate').value;
    let phoneno = this.employeeinformation.get('phoneno').value;


    let usertype_id = (<HTMLInputElement>document.getElementById("usertype_id")).value;

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
        (document.getElementById('regcurrentaddressline2_id') as HTMLFormElement).classList.add("validation");
        }
        if(regcurrentstate_name == null)
        {
         (document.getElementById('regcurrentstate_id') as HTMLFormElement).classList.add("validation");
         }
         if(regcurrentzip_name == null)
        {
         (document.getElementById('regcurrentzip_id') as HTMLFormElement).classList.add("validation");
         }
         if(regcurrentcity_name == null)
        {
         (document.getElementById('regcurrentcity_id') as HTMLFormElement).classList.add("validation");
         }
         if(county_name == null)
         {
          (document.getElementById('county_id') as HTMLFormElement).classList.add("validation");
          }
          if(country_name == null)
          {
           (document.getElementById('country_id') as HTMLFormElement).classList.add("validation");
           }

     if(password != (conform_password)){

      (document.getElementById('comformpassword_id') as HTMLFormElement).classList.add("validation");
    }
// alert(usertype_id);
    if(usertype_id == "employee"){
    
// alert("in");
      if(jobtitle == null)
      {
       (document.getElementById('jobtitle_id') as HTMLFormElement).classList.add("validation");
       }
       if(employeeid == null)
      {
       (document.getElementById('employee_id') as HTMLFormElement).classList.add("validation");
       }
       if(startdate == null)
      {
       (document.getElementById('startdate_id') as HTMLFormElement).classList.add("validation");
       }
       if(phoneno == null)
      {
       (document.getElementById('phoneno_id') as HTMLFormElement).classList.add("validation");
       }

    }


    if(active1 == false){

    if(socialno_name == null){
      (document.getElementById('socialno_id') as HTMLFormElement).classList.add("validation");
    }
      
    }

    else{

      if(businesssize_name == null){
        (document.getElementById('business_id') as HTMLFormElement).classList.add("validation");
      }

      if(be_classificationname == null){
        (document.getElementById('be_classificationid') as HTMLFormElement).classList.add("validation");
      }
        
      }



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
        (<HTMLInputElement>document.getElementById("employeeinfo")).style.display ="none";
      }
    else  if(usertype_id == 'employee'){
        (<HTMLInputElement>document.getElementById("employeeinfo")).style.display ="block";
        (<HTMLInputElement>document.getElementById("vendordetails")).style.display ="none";
       }

      else {
        (<HTMLInputElement>document.getElementById("vendordetails")).style.display ="none";
        (<HTMLInputElement>document.getElementById("employeeinfo")).style.display ="none";
      }
    }

    gejobtitledata(){
      this.http.get(config_url+'/employee/selectJobTitle').subscribe(
        (jobtitledata: {}) => {
          this.jobtitle=jobtitledata;
          this.jobdetail=this.jobtitle.data.JobTitle;
                console.log("data1>>>",jobtitledata);
    });
    }

    getemployeedata(){
      this.http.get(config_url+'/employee/selectEmployeeType').subscribe(
        (employeedata: {}) => {
          this.employeetype=employeedata;
          this.employeedetail=this.employeetype.data.EmployeeDetails;
                console.log("data1>>>",this.employeedetail)
    });
    }

    getstatedata(){

      this.http.get(config_url+'/app/selectAllState').subscribe(
        (statelistdata: {}) => {
         
          this.statetype = statelistdata;
          this.statedetail = this.statetype.data.statedetails;
    
                console.log("data>>>",statelistdata)
    });
    }

    // inputErrorMessage1(phoneErr: any){
    //   (document.getElementById(phoneErr) as HTMLFormElement).innerHTML = "";
    // }
}
