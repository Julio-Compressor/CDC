import { Injectable } from '@angular/core';
import { Player } from 'src/app/models/player.class';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly PLAYERS_KEY = 'players';
  private readonly CURRENT_GAME_KEY = 'currentGame';

  constructor() { }

  // Gestion des joueurs
  savePlayers(players: Player[]): void {
    localStorage.setItem(this.PLAYERS_KEY, JSON.stringify(players));
  }

  getPlayers(): Player[] {
    const players = localStorage.getItem(this.PLAYERS_KEY);
    if (players) {
      return JSON.parse(players).map(
        (p: { name: string, score: number }) => new Player(p.name, p.score)
      );
    }
    return [];
  }

  // Gestion de la partie en cours
  saveCurrentGame(players: Player[]): void {
    localStorage.setItem(this.CURRENT_GAME_KEY, JSON.stringify(players));
  }

  getCurrentGame(): Player[] {
    const currentGame = localStorage.getItem(this.CURRENT_GAME_KEY);
    if (currentGame) {
      return JSON.parse(currentGame).map(
        (p: { name: string, score: number }) => new Player(p.name, p.score)
      );
    }
    return [];
  }

  // Nettoyage des données
  clearPlayers(): void {
    localStorage.removeItem(this.PLAYERS_KEY);
  }

  clearCurrentGame(): void {
    localStorage.removeItem(this.CURRENT_GAME_KEY);
  }

  clearAll(): void {
    this.clearPlayers();
    this.clearCurrentGame();
  }
}

