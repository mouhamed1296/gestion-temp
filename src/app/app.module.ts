import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> dev


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauAdmComponent } from './tableau-adm/tableau-adm.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableauArchComponent } from './tableau-arch/tableau-arch.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModifierComponent } from './modifier/modifier.component';
import { TableauUserComponent } from './tableau-user/tableau-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ModificationComponent } from './modification/modification.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnectionComponent } from './connection/connection.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauAdmComponent,
    TableauArchComponent,
    ModifierComponent,
    TableauUserComponent,
    AdminLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    InscriptionComponent,
    ConnectionComponent,

    ModificationComponent,
       AdminLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule

=======
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    
>>>>>>> dev
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
