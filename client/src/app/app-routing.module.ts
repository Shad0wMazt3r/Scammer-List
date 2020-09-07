import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { asLiteral } from '@angular/compiler/src/render3/view/util';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

