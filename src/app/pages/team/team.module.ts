import { NgModule } from '@angular/core';
import { TeamComponent } from './team.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: TeamComponent,
  },
];

@NgModule({
  declarations: [TeamComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [TeamComponent],
})
export class TeamModule {}
