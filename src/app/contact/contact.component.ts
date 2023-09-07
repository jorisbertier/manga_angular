import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactTitle:string | any;
  username: string | any;
  message:string = '';
  messagePwd:string = '';

  onSubmit(form: NgForm) {
    console.log(form.value);
    
    console.log(form.value.username);
    
      if(form.value.username.length < 4) {
        this.message = 'Longueur minimale du nom de 4 🛑'
      }
      
      if(form.value.username.length >= 4) {
        this.message = 'Longeueur atteinte 👊'
      }
      
      if(form.value.password.length < 6) {
        this.messagePwd = '🛑'
      }
      
      if(form.value.password.length >= 6) {
        this.messagePwd = '👊'
      }

      form.reset(); // ou form.value.username ou form.resetForm()

    }
    
  }
