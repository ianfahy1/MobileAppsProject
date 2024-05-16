import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) { }

  GetBookData():Observable<any>{
    return this.httpClient.get('https://openlibrary.org/search.json?q=harry%20potter&fields=*,&limit=1')
  }
}