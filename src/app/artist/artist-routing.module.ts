import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';



const routes: Routes = [
  {
    path: '',

    children: [
      { path: "search", component: SearchComponent },
      { path: 'detail/:id', component: DetailComponent },
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
