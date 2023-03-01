import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  isMobile = false;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      this.isMobile = matches;
      if (matches) {
        return [
          {
            title: 'Odrađeno treninga',
            cols: 1,
            rows: 1,
            content: '317 treninga',
          },
          {
            title: 'Idući trening',
            cols: 1,
            rows: 1,
            content: 'Trening prsa i ramena',
          },
        ];
      }

      return [
        {
          title: 'Odrađeno treninga',
          cols: 1,
          rows: 1,
          content: '316 treninga',
        },
        {
          title: 'Idući trening',
          cols: 1,
          rows: 1,
          content: 'Trening prsa i ramena',
        },
      ];
    })
  );
}
