import { NgModule } from '@angular/core';
import { SupportComponent } from './support.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: SupportComponent,
  },
];

@NgModule({
  declarations: [SupportComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [SupportComponent],
})
export class SupportModule {}
