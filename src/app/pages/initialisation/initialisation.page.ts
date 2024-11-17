import {Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {PlayerService} from "../../services/player/player-service.service";

@Component({
  selector: 'app-initialisation',
  templateUrl: './initialisation.page.html',
  styleUrls: ['./initialisation.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InitialisationPage implements OnInit {
  playerService: PlayerService = inject(PlayerService);
  players = this.playerService.getCurrentPlayers();

  constructor() { }

  ngOnInit() {
    this.logPlayers();
  }

  private logPlayers() {
    console.log(this.players);
  }
}
