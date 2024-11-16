import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private router: Router) { }

  nouvellePartie() {
    // Navigation vers la page nouvelle partie
    this.router.navigate(['/new-game']);
  }

  continuerPartie() {
    // Navigation vers la partie sauvegardée
    console.log('Continuer partie');
    // this.router.navigate(['/continuer-partie']);
  }

  voirRegles() {
    // Navigation vers la page des règles
    console.log('Voir les règles');
    // this.router.navigate(['/regles']);
  }
}
