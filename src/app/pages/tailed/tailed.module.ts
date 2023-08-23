import { NgModule } from '@angular/core';
import { TailedComponent } from './tailed.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: TailedComponent,
  },
];

@NgModule({
  declarations: [TailedComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [TailedComponent],
})
export class TailedModule {}
