import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'ang2';
  public enteredText = "";
  public randomString = uuidv4();
  public getData : any
constructor(private apiDetails:MyserviceService){}

ngOnInit(){
  this.getStaffdata();
}

  getEnterText(eve:any){
   this.enteredText = eve.target.value
  }

  compare(r:any,et:any){
   if(!et){
    return "pending"
   }
   return r === et ? "succeed" : "wrong"
  }

  getStaffdata(){
this.apiDetails.apiData().subscribe(res =>{
  this.getData=res
})
  }
}
