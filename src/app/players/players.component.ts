import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players$: Observable<any>;

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.players$ = this.playersService.getPlayers();
  }

}
