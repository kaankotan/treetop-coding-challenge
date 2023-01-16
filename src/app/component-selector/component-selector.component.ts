import { Component } from '@angular/core';
import {DataBox} from "../data-box";
import {DataService} from "../data.service";
import {Data} from "@angular/router";
import {ComponentStoreService} from "../component-store.service";
@Component({
  selector: 'app-component-selector',
  templateUrl: './component-selector.component.html',
  styleUrls: ['./component-selector.component.css']
})
export class ComponentSelectorComponent {
  constructor(private dataService: DataService, private componentStoreService: ComponentStoreService) {
  }

  data: DataBox[] = [];

  selectedComponent?: DataBox;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe(data => this.data = data);
  }

  onSelect(component: DataBox): void {
    this.selectedComponent = component;
  }

  onAdd(component: DataBox) {
    this.componentStoreService.add(component);
  }
}
