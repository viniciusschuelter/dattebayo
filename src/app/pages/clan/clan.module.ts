import {NgModule} from "@angular/core";
import {ClanComponent} from "./clan.component";
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
  {
    path: '',
    component: ClanComponent
  }
];

@NgModule({
  declarations: [ClanComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ClanComponent],
})
export class ClanModule { }
