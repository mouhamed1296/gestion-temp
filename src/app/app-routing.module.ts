import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ModificationComponent } from './modification/modification.component';

const routes: Routes = [
  { path: "connection", component: ConnectionComponent},
  { path: "dashboard", component: DashboardComponent },
  { path: "modification", component: ModificationComponent },
  { path: "inscription", component: InscriptionComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
