import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddImageComponent } from './add-image/add-image.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  {
    path:"",
    component:AddImageComponent
  },
  {
    path:"search-result/:name",
    component:SearchResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
