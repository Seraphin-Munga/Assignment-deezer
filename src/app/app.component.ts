import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtistService } from '../app/core/services/artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public textSearch = ""
  public artist: any;
  public arrArtist: any

  title = 'deezer';

  public constructor(
    private readonly _service: ArtistService,
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router
  ) { }
  public search(): void {
    debugger
    this._service.get(this.textSearch).then((response) => {
      this.artist = response;
      this.arrArtist = this.artist.data;
      sessionStorage.setItem("artist", JSON.stringify(this.arrArtist))
      this._router.navigate(['/artist-search/search']);

    })
  }



}
