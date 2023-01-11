import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauAdmComponent } from './tableau-adm/tableau-adm.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableauArchComponent } from './tableau-arch/tableau-arch.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModifierComponent } from './modifier/modifier.component';
import { SwitcherComponent } from './switcher/switcher.component';
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableauAdmComponent,
    TableauArchComponent,
    ModifierComponent,
    SwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
