import { NgModule } from '@angular/core';
import { AkatsukiComponent } from './akatsuki.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: AkatsukiComponent,
  },
];

@NgModule({
  declarations: [AkatsukiComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [AkatsukiComponent],
})
export class AkatsukiModule {}
