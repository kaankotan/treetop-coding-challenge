import { Injectable } from '@angular/core';
import {DataBox} from "./data-box";

@Injectable({
  providedIn: 'root'
})
export class ComponentStoreService {

  constructor() { }

  components: DataBox[] = [];

  add(component: DataBox) {
    this.components.push(component);
  }

  clear() {
    this.components = [];
  }
}
