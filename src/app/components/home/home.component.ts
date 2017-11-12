import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public infoForm: FormGroup;
  public visitedСountriesControls: FormArray;
  public maritalS = ['married', 'unmarried']

  constructor(private formBuilder: FormBuilder) { 
    this.buildForm();
  }

  buildForm (){
    this.infoForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phoneNumber: new FormControl(''),
      bio: new FormControl(''),
      email: new FormControl(''),
      maritalStatus: new FormControl('unmarried'),
      visitedСountries: this.formBuilder.array([
        this.initVisitedСountries()
      ]),
      musicStyle: new FormGroup({
        rok: new FormControl(false),
        pop: new FormControl(false),
        jazz: new FormControl(''),
        funk: new FormControl(''),     
        rap: new FormControl('')
      }),
      color: new FormControl('#ffffff')
    });
    this.visitedСountriesControls = this.infoForm.get('visitedСountries') as FormArray;
    console.dir(this.infoForm)
  }
 
  public onResetForm (){
    this.infoForm.reset();
  }

  public onSubmitForm (){
    console.log(this.infoForm.value);
  }

  private initVisitedСountries() {
    return this.formBuilder.group({
      name: new FormControl(null)
    });
  }

  private initVisitedCountriesAtCreate() {
    const control = <FormArray>this.infoForm.controls['visitedСountries'];
    const initData = [{
      name: null
    }];
    initData.forEach(data => control.push(this.formBuilder.group(data)));
  }

  public onAddVisitedCountries() {
    const control = <FormArray>this.infoForm.controls['visitedСountries'];
    const addCtrl = this.initVisitedСountries();
    control.push(addCtrl);
  }

  public onRemoveVisitedCountries(i: number) {
    const control = <FormArray>this.infoForm.controls['visitedСountries'];
    control.removeAt(i);
  }
  ngOnInit() {
  }

}
