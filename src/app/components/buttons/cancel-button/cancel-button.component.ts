import {Component, Input} from '@angular/core';
import {IonButton} from "@ionic/angular/standalone";

@Component({
  selector: 'app-cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.scss'],
  imports: [
    IonButton
  ],
  standalone: true
})
export class CancelButtonComponent {
  @Input() buttonText: string = 'Retour';

  constructor() { }

}
