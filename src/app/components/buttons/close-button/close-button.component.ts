import { Component } from '@angular/core';
import {IonButton, IonFab, IonFabButton, IonIcon} from "@ionic/angular/standalone";
import {addIcons} from 'ionicons';
import {close} from "ionicons/icons";


@Component({
  selector: 'app-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.scss'],
  standalone: true,
    imports: [
        IonFab,
        IonFabButton,
        IonIcon,
        IonButton
    ]
})
export class CloseButtonComponent  {

  constructor() {
    addIcons({ close });
  }
}
