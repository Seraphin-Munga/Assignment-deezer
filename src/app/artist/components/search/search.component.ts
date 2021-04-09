import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public arrArtist: any;

  public ngOnInit() {
    this.arrArtist = JSON.parse(sessionStorage.getItem("artist"));
    sessionStorage.clear();
  }
}
