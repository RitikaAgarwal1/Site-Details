import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteDetailsComponent } from './site-details/site-details.component';

const routes: Routes = [
  { path: '', component: SiteDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
