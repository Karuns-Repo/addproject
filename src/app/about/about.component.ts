import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
public outCome : any;

public property = {
  name:"ram",
  age:25,
  gender:"male"
}

constructor(private personData:MyserviceService){
  
}
ngOnInit(){
  this.getMethod()
}
getMethod(){
  this.personData.profile().subscribe(res =>{
    this.outCome = res
  })
}


}
