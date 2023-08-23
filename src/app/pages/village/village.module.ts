import { NgModule } from '@angular/core';
import { VillageComponent } from './village.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: VillageComponent,
  },
];

@NgModule({
  declarations: [VillageComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [VillageComponent],
})
export class VillageModule {}
