import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [AboutComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [AboutComponent],
})
export class AboutModule {}
