import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauAdmComponent } from './tableau-adm/tableau-adm.component';
import { ModifierComponent } from './modifier/modifier.component';
const routes: Routes = [
  {path: 'tableau-adm',component:TableauAdmComponent},
  {path: 'modifier',component:ModifierComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
