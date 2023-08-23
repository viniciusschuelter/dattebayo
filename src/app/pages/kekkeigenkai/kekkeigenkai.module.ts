import { NgModule } from '@angular/core';
import { KekkeigenkaiComponent } from './kekkeigenkai.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: KekkeigenkaiComponent,
  },
];

@NgModule({
  declarations: [KekkeigenkaiComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [KekkeigenkaiComponent],
})
export class KekkeigenkaiModule {}
