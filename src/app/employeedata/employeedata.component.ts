import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.scss']
})
export class EmployeedataComponent {
event:any;

inData={
  name:"ram",
  age:25,
  gender:"male"
}




myData={
  name: "canada",
  age: 90,
  gender: "N/A",
}

newdata=[{
  name:"karun",
  dob:"30-06-1999",
  gender:"male",
  address:[{doorno:'9-21', street:"ganta street", area:"mummidivaram"}]
},
{
  name:"mani",
  dob:"30-06-1990",
  gender:"male",
  address:[{doorno:'1-21', street:"ganta street", area:"kesanapalli"}]
}]



  constructor(private togetdatafromservice:MyserviceService){
    this.getemployeeDetails()
  }
getemployeeDetails(){
  this.togetdatafromservice.getDetails().subscribe(res=>{
    this.event=res
   
   }) 
}

submitForm(x:any){
  console.log(x.value)
this.togetdatafromservice.takeData(x.value).subscribe(res =>{
  this.getemployeeDetails()
})
}

}
