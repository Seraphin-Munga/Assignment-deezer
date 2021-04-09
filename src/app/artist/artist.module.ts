import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistRoutingModule } from './artist-routing.module';
import { SearchComponent } from './components/search/search.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { DetailComponent } from './components/detail/detail.component';



@NgModule({
  declarations: [SearchComponent, DetailComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    NzCardModule,
    NzGridModule,
    NzFormModule

  ]
})
export class ArtistModule { }
