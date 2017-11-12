import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, FormArrayName } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public infoForm: FormGroup;
  public visitedСountriesControls: FormArray;

  constructor(private formBuilder: FormBuilder) { 
    this.buildForm();
  }

  buildForm (){
    this.infoForm = this.formBuilder.group({
      firstName: this.formBuilder.control(null),
      lastName: this.formBuilder.control(null),
      phoneNumber: this.formBuilder.control(null),
      bio: this.formBuilder.control(null),
      maritalStatus: this.formBuilder.control(null),
      visitedСountries: this.formBuilder.array([
        this.formBuilder.control(null)
      ]),
    });
    this.visitedСountriesControls = this.infoForm.get('visitedСountries') as FormArray;
  }
  public onAddVisitedCountries (){
    this.visitedСountriesControls.push(this.formBuilder.control(null));
  }

  public onRemoveVisitedCountries (index){
    this.visitedСountriesControls.removeAt(index);
  }
  public onResetForm (){
    this.infoForm.reset();
  }

  public onSubmitForm (){
    console.log(this.infoForm.value);
  }
  ngOnInit() {
  }

}
