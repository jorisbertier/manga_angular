import { Component, Input } from '@angular/core';
import { Iuser } from '../user/Iuser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() userEnfant: Iuser| undefined;

}
