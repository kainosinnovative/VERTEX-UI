import { Injectable } from '@angular/core';
import { config_url } from '../shared/constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  apiURL = config_url;

  constructor(private http:HttpClient) { }

  // getmasterstatelist:any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
  
    } ),responseType: 'text' as 'json'
  };

  postBlog(blog: any) {
    let url = "https://kainosinnovative.com/VERTEX-PHP-API";
    return this.http.post(url, blog, this.httpOptions);
  }

// getmasterstatelist(){

//   return this.http.get(config_url+'app/selectallstate').subscribe(
//   (data: any) => {
//   console.log(data)
// });

// }

getstatelist(): Observable<any> {

  return this.http.get<any>(this.apiURL + "/app/selectallstate")

  .pipe(
  retry(1),
  // catchError(this.handleError)
  )

  }

  

}








