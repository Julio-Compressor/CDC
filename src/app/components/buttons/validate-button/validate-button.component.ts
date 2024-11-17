import {Component, Input, input} from '@angular/core';
import {IonButton} from "@ionic/angular/standalone";

@Component({
  selector: 'app-validate-button',
  templateUrl: './validate-button.component.html',
  styleUrls: ['./validate-button.component.scss'],
  imports: [
    IonButton
  ],
  standalone: true

})
export class ValidateButtonComponent {
  @Input() buttonText: string = 'Continuer';

  constructor() { }


}
