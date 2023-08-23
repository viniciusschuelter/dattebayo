import { NgModule } from '@angular/core';
import { KaraComponent } from './kara.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: KaraComponent,
  },
];

@NgModule({
  declarations: [KaraComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [KaraComponent],
})
export class KaraModule {}
