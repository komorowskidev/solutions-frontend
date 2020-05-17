import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DataComponent } from './components/data/data.component';
import { DescriptionComponent } from './components/description/description.component';
import { NamesComponent } from './components/names/names.component';
import { ResultComponent } from './components/result/result.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DataComponent,
    DescriptionComponent,
    NamesComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
