import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonIcon,
  IonText
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Player } from 'src/app/models/player.class';
import { Observable } from 'rxjs';
import { PlayerService } from 'src/app/services/player/player-service.service';
import {AddButtonComponent} from "../../components/buttons/add-button/add-button.component";
import {CloseButtonComponent} from "../../components/buttons/close-button/close-button.component";
import {ValidateButtonComponent} from "../../components/buttons/validate-button/validate-button.component";
import {CancelButtonComponent} from "../../components/buttons/cancel-button/cancel-button.component";

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.page.html',
  styleUrls: ['./new-game.page.scss'],
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    IonContent,
    IonInput,
    IonItem,
    AsyncPipe,
    AddButtonComponent,
    CloseButtonComponent,
    ValidateButtonComponent,
    CancelButtonComponent, IonLabel]
})
export class NewGamePage {
  players$: Observable<Player[]>;
  newPlayerName: string = '';

  constructor(
    private router: Router,
    private playerService: PlayerService
  ) {
    this.players$ = this.playerService.players$;
  }

  handleInputChange(event: any) {
    this.newPlayerName = event.detail.value;
  }

  addPlayer() {
    if (this.newPlayerName) {
      const success = this.playerService.addPlayer(this.newPlayerName);
      if (success) {
        this.newPlayerName = '';
      } else {
        alert('Ce nom est déjà utilisé ou invalide');
      }
    }
  }

  removePlayer(index: number) {
    this.playerService.removePlayer(index);
  }

  cancel() {
    this.playerService.clearPlayers();
    this.router.navigate(['/home']);
  }

  validate() {
    this.playerService.saveCurrentGame();
    // this.router.navigate(['/game']);
  }
}

