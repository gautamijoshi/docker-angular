import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="http://localhost:9898/product";
  constructor(private http:HttpClient) { }

  Select()
  {
    return this.http.get(this.url);
  }
}
