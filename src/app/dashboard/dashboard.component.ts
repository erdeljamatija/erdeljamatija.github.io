import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { SupabaseService } from "./../supabase.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  isMobile = false;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      this.isMobile = matches;
      if (matches) {
        return [
          { title: 'Odrađeno treninga', cols: 2, rows: 1, content: '316 treninga' },
          { title: 'Idući trening', cols: 2, rows: 1, content: 'Trening prsa i ramena' }
        ];
      }

      return [
        { title: 'Odrađeno treninga', cols: 1, rows: 1, content: '316 treninga' },
        { title: 'Idući trening', cols: 1, rows: 1, content: 'Trening prsa i ramena' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private supabase: SupabaseService) { }
}
