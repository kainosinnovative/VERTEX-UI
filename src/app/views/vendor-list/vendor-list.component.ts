import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config_url } from '../shared/constant';
import { Router,ActivatedRoute,ParamMap, Params, NavigationEnd  } from '@angular/router';
@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  vendorDetail: any;

  constructor(private http: HttpClient,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.GelAllVendors();
  }

  GelAllVendors(){
     
    
    // alert('in');
    this.http.get(config_url+'/vendor/GetAllVendors').subscribe( (data: {}) => {
        this.vendorDetail=data;
        this.vendorDetail=this.vendorDetail.data.VendorList;
        console.log(this.vendorDetail);
  });
  }

  ViewVendor(vendorid :any)
  {
    localStorage.setItem("vendoridSes",vendorid);
      console.log(vendorid);
      this.router.navigate(['/vendormanagement']);
      // this.router.navigate(['/vendormanagement/'+vendorid]);
      
    
  }

}
