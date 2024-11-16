import { Component } from '@angular/core';
import {IonButton, IonIcon} from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
  imports: [
    IonIcon,
    IonButton
  ],
  standalone: true
})
export class AddButtonComponent {
  constructor() {
    addIcons({ add });
  }
}
