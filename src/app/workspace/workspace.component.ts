import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {


employeeForm = new FormGroup(
  {
    firstname:new FormControl(""),
    lastname:new FormControl(""),
    email : new FormControl(""),
    number : new FormControl(),
    gender : new FormControl(),
    date :  new FormControl(),
    textArea : new FormControl(""),
    pass : new FormControl("")
  }
)
submit(){
  console.log(this.employeeForm.value)
}
}
