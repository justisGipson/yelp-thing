import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Search } from './models/search.model';
import { Result } from './models/result.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  public URL = 'http://localhost:3000/search'
  constructor(public http: HttpClient) { }

  findFood(search: Search): any {
    let URL = `${this.URL}?price=${search.price}&location=${search.location}`;
    return this.http.get<Result>(URL, httpOptions).pipe(
      tap(data => {
        console.log(data);
        return data;
      })
    )
  }
}
