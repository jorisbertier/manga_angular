import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent {

  public form:FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')

  })


  onSubmit() {
    if(this.form.valid) {
      console.log(this.form.value.password);
      console.log(this.form.get('password')?.value);
      
      
    }
  }
}
