import { Injectable } from '@angular/core';
import {DataBox} from "./data-box";
import {DATA} from "./mock-data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Observable<DataBox[]> {
    return of(DATA);
  }
}
