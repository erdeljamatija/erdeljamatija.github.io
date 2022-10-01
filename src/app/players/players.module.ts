import { NgModule } from '@angular/core';
import { PlayersComponent } from './players.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PlayersComponent],
  imports: [CommonModule],
  exports: [PlayersComponent]
})
export class PlayersModule { }
