import {Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {PlayerService} from "../../services/player/player-service.service";
import {CancelButtonComponent} from "../../components/buttons/cancel-button/cancel-button.component";
import {ValidateButtonComponent} from "../../components/buttons/validate-button/validate-button.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-initialisation',
  templateUrl: './initialisation.page.html',
  styleUrls: ['./initialisation.page.scss'],
  standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CancelButtonComponent, ValidateButtonComponent]
})
export class InitialisationPage implements OnInit {
  playerService: PlayerService = inject(PlayerService);
  players = this.playerService.getCurrentPlayers();

  constructor(private router: Router) { }

  ngOnInit() {
    this.logPlayers();
  }

  private logPlayers() {
    console.log(this.players);
  }

  return() {
    this.router.navigate(['/new-game']);
  }
  validate() {
    console.log('commencer')
  }
}
