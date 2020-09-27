import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  forbiddenUsername:Array<string> =["asd", "hello"];

  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forBiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forBiddenEmails.bind(this)),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

  //  this.signupForm.valueChanges.subscribe((value)=>{console.log(value)});
    this.signupForm.statusChanges.subscribe((status)=>{console.log(status)});
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  // Custom Validators
  forBiddenNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsername.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true}  
    }
    return null;
  }
  // Async validator
 // Custom Validators
 forBiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject)=> {
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true})
        }else{
          resolve(null);
        }
      },500)
    })
   return promise;
  }
}
