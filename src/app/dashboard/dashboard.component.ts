import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Alunos', cols: 1, rows: 1 },
          { title: 'Professores', cols: 1, rows: 1 },
          { title: 'Turma', cols: 1, rows: 1 },
          { title: 'Salas', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Alunos', cols: 2, rows: 1 },
        { title: 'Professores', cols: 1, rows: 1 },
        { title: 'Turma', cols: 1, rows: 2 },
        { title: 'Salas', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
