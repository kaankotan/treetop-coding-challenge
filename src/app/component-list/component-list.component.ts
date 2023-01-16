import { Component } from '@angular/core';
import {DataBox} from "../data-box";
import {Data} from "@angular/router";
import {ComponentStoreService} from "../component-store.service";

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent {
  constructor(public componentStoreService: ComponentStoreService) {
  }

}
