import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../../../core/services/artist.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public detailArtist: any
  public dataArtist: any;

  public constructor(private route: ActivatedRoute, private readonly _service: ArtistService) { }

  public ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this._service.detail(id).then((response) => {
      this.detailArtist = response
      this.dataArtist = this.detailArtist.data
    })
  }

}
