import { LocalStorageService } from './../local-storage/local-storage.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from 'src/app/models/player.class';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersSubject = new BehaviorSubject<Player[]>([]);
  players$: Observable<Player[]> = this.playersSubject.asObservable();

  constructor(private localStorageService: LocalStorageService) {
    // Initialiser avec les joueurs stockés
    this.loadPlayers();
  }

  private loadPlayers(): void {
    const players = this.localStorageService.getPlayers();
    this.playersSubject.next(players);
  }

  addPlayer(name: string): boolean {
    const trimmedName = name.trim();
    if (!trimmedName) return false;

    if (this.isNameTaken(trimmedName)) {
      return false;
    }

    const newPlayer = new Player(trimmedName, 0);
    const currentPlayers = this.playersSubject.value;
    const updatedPlayers = [...currentPlayers, newPlayer];

    this.playersSubject.next(updatedPlayers);
    this.localStorageService.savePlayers(updatedPlayers);
    return true;
  }

  removePlayer(index: number): void {
    const currentPlayers = this.playersSubject.value;
    currentPlayers.splice(index, 1);

    this.playersSubject.next(currentPlayers);
    this.localStorageService.savePlayers(currentPlayers);
  }

  clearPlayers(): void {
    this.playersSubject.next([]);
    this.localStorageService.clearPlayers();
  }

  private isNameTaken(name: string): boolean {
    return this.playersSubject.value.some(
      player => player.name.toLowerCase() === name.toLowerCase()
    );
  }

  getCurrentPlayers(): Player[] {
    return this.playersSubject.value;
  }

  saveCurrentGame(): void {
    this.localStorageService.saveCurrentGame(this.playersSubject.value);
  }
}