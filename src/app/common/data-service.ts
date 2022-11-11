import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable, shareReplay } from 'rxjs';
import { ResponseInterface } from './data.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public apiHost: string = '../../assets/data.json';
  private readonly _data$ = this.getData().pipe(shareReplay(1));
  public readonly data$ = this._data$.pipe(
    filter(Boolean),
    map((d) => d.data),
    shareReplay(1)
  );
  public readonly total$ = this._data$.pipe(
    filter(Boolean),
    map((t) => t.total),
    shareReplay(1)
  );
  constructor(private http: HttpClient) {}

  getData(): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(this.apiHost);
  }
}
