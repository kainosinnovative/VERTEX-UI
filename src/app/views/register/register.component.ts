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
  userdata:any;
  usertypedata:any;
  selectedStateObj:any;
  citytype:any;
  citydetail:any;
  zipcodelist:any;
  zipcodedetail: any;


  constructor(private frmbuilder: FormBuilder,  private http: HttpClient) { }

  ngOnInit(): void {

    this.gejobtitledata();
    this.getemployeedata();
    this.getusertypedata();
    this. getstatedata();
    // this.onChangeObj();

    this.registercontactinformation = this.frmbuilder.group({

      first_name: [],
      last_name: [],
      usertype: [],
      user_id: [],
      password: [],
      conform_password: [],

      current_add: [],
      current_secadd: [],
      currentstate: [],
      currentcity: [],

     
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
socialno = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;

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

  validation(){

    let first_name = this.registercontactinformation.get('first_name').value;
    // alert(first_name);
    let last_name = this.registercontactinformation.get('last_name').value;
    let usertype = this.registercontactinformation.get('usertype').value;
    let user_id = this.registercontactinformation.get('user_id').value;
    let password = this.registercontactinformation.get('password').value;
    let conform_password = this.registercontactinformation.get('conform_password').value;


    let current_add = this.registercontactinformation.get('current_add').value;
// alert(current_add);
    let current_secadd = this.registercontactinformation.get('current_secadd').value;
    // alert(current_secadd);
    let currentstate = this.registercontactinformation.get('currentstate').value;
    // alert(currentstate);
    let currentcity = this.registercontactinformation.get('currentcity').value;
    // alert(currentcity);
    let regcurrentzip_name = this.registercontactinformation.get('regcurrentzip_name').value;
    alert(regcurrentzip_name);
    let county_name = this.registercontactinformation.get('county_name').value;
    alert(county_name);
    let country_name = this.registercontactinformation.get('country_name').value;
    alert(country_name);
    

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
      if(conform_password == null)
     {
      (document.getElementById('comformpassword_id') as HTMLFormElement).classList.add("validation");
      }
      if(current_add == null)
      {
       (document.getElementById('currentadd_id') as HTMLFormElement).classList.add("validation");
       }
       if(current_secadd == null)
       {
        (document.getElementById('currentsecadd_id') as HTMLFormElement).classList.add("validation");
        }
        if(currentstate == null)
        {
         (document.getElementById('curstate_id') as HTMLFormElement).classList.add("validation");
         }
         if(regcurrentzip_name == null)
        {
         (document.getElementById('regcurrentzip_id') as HTMLFormElement).classList.add("validation");
         }
         if(currentcity == null)
        {
         (document.getElementById('currentcity_id') as HTMLFormElement).classList.add("validation");
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

    if(usertype_id == "EMPLOY"){
    

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
    if(socialno_name != (this.socialno)){

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
    }

    gejobtitledata(){
     
      this.http.get(config_url+'/employee/selectJobTitle').subscribe( (data: {}) => {
          this.jobtitle=data;
          this.jobdetail=this.jobtitle.data.JobTitle;
            
    });
    }

    getemployeedata(){
      this.http.get(config_url+'/employee/selectEmployeeType').subscribe(
        (employeedata: {}) => {
          this.employeetype=employeedata;
          this.employeedetail=this.employeetype.data.EmployeeDetails;
     });
    }

    getusertypedata(){
   
      this.http.get(config_url+'/app/selectUserType').subscribe(
        (usertype: {}) => {
          this.userdata=usertype;
          this.usertypedata=this.userdata.data.UserTypeDetails;
                // console.log("usertypedata>>>",this.usertypedata)
    });
    }

    getstatedata(){

      this.http.get(config_url+'/app/selectAllState').subscribe(
        (statelistdata: {}) => {
         
          this.statetype = statelistdata;
          this.statedetail = this.statetype.data.statedetails;
          // console.log("state",this.statedetail)
    });
    }

    onChangeObj(newObj: any) {
  
   let stateid = (<HTMLInputElement>document.getElementById("curstate_id")).value;

 

// alert(cityid);
 
   this.http.get(config_url+'/app/getCityDistrictByState?stateid='+stateid).subscribe(data =>
        {
          this.citytype=data;
          this.citydetail=this.citytype.data.citydistrictdata;
          // console.log( 'city', this.citytype)
        })


        

      }

      onchangezip(){

        let cityid = (<HTMLInputElement>document.getElementById("currentcity_id")).value;

        this.http.get(config_url+'/app/getZipcodeByCity?cityid='+cityid).subscribe(data1 =>
          {

            console.log(data1);
            this.zipcodelist=data1;
            this.zipcodedetail=this.zipcodelist.data.zipcodedata;
            // console.log( 'zipcode', this.zipcodedetail)
          })

      }

    // inputErrorMessage1(phoneErr: any){
    //   (document.getElementById(phoneErr) as HTMLFormElement).innerHTML = "";
    // }
}
