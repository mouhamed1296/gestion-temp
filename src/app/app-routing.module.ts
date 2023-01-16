import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauAdmComponent } from './tableau-adm/tableau-adm.component';
import { ModifierComponent } from './modifier/modifier.component';
import { TableauUserComponent } from './tableau-user/tableau-user.component';
import { TableauArchComponent } from './tableau-arch/tableau-arch.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnectionComponent } from './connection/connection.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ModificationComponent } from './modification/modification.component';

  


const routes: Routes = [
  { path: "", pathMatch: "full", component: ConnectionComponent},
  { path: "dashboard", component: DashboardComponent },
  { path: "modification", component: ModificationComponent },
  { path: "inscription", component: InscriptionComponent},
  {path: 'tableau-adm',component:TableauAdmComponent},
  {path: 'modifier/:id',component:ModifierComponent},
  {path: 'tableau-user',component:TableauUserComponent},
  {path: 'tableau-arch',component:TableauArchComponent},
  {path: "modification", component: ModifierComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
