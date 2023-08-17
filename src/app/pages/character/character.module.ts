import {NgModule} from "@angular/core";
import {CharacterComponent} from "./character.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
  {
    path: '',
    component: CharacterComponent
  }
];

@NgModule({
  declarations: [CharacterComponent],
  imports: [
    NgIf,
    AsyncPipe,
    RouterModule.forChild(routes)
  ]
})
export class CharacterModule { }
