import { NgModule } from '@angular/core';
import { DocsComponent } from './docs.component';
import { Route, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

const routes: Route[] = [
  {
    path: '',
    component: DocsComponent,
  },
];

@NgModule({
  declarations: [DocsComponent],
  imports: [RouterModule.forChild(routes), NgFor],
  exports: [DocsComponent],
})
export class DocsModule {}
