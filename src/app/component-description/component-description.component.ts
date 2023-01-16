import { Component, Input } from '@angular/core';
import {DataBox} from "../data-box";
import {ComponentStoreService} from "../component-store.service";
import {ComponentSelectorComponent} from "../component-selector/component-selector.component";
import {Data} from "@angular/router";
@Component({
  selector: 'app-component-description',
  templateUrl: './component-description.component.html',
  styleUrls: ['./component-description.component.css']
})
export class ComponentDescriptionComponent {

  constructor(public componentStoreService: ComponentStoreService) {
  }

  @Input() component?: DataBox
}
