import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  incoming = 'http://localhost:3000/personaldata'

  linkd = "http://localhost:3000/profile"

  api = "http://localhost:3000/staffData"

  constructor(private linkData:HttpClient){}
  profile(){
    return this.linkData.get(this.linkd)
  }
  getDetails(){
    return this.linkData.get(this.incoming)
   }
  

   takeData(d:any){
    console.log(d)
    return this.linkData.post(this.incoming,d)
    
   }

   apiData(){
    return this.linkData.get(this.api)
   }
}
