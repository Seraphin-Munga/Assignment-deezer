import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { environment } from '../../../environments/environment';
import { SearchRetrievalModel } from '../Models/artist-retrieval.model';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  public constructor(
    private readonly _http: HttpClient,
  ) { }

  public async get(search: string): Promise<SearchRetrievalModel> {
    try {
      const response = await this._http.get<SearchRetrievalModel>(`${environment.serverApiUrl}/search/artist/?q=${search}&index=0&limit=2&output=json`).toPromise();
      return plainToClass(SearchRetrievalModel, response);
    } catch (error) {
      if (error && error.error instanceof ProgressEvent) {
        throw new Error('A connection could not be established. Please contact an administrator.');
      }
      throw Error(error.error);
    }
  }

  public async detail(id: string): Promise<SearchRetrievalModel> {
    try {
      const response = await this._http.get<SearchRetrievalModel>(`${environment.serverApiUrl}artist/${id}/top?limit=4`).toPromise();
      return plainToClass(SearchRetrievalModel, response);
    } catch (error) {
      if (error && error.error instanceof ProgressEvent) {
        throw new Error('A connection could not be established. Please contact an administrator.');
      }
      throw Error(error.error);
    }
  }


}
