import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentSelectorComponent } from './component-selector/component-selector.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { ComponentDescriptionComponent } from './component-description/component-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentSelectorComponent,
    ComponentListComponent,
    ComponentDescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
