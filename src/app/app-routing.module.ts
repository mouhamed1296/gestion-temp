import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauAdmComponent } from './tableau-adm/tableau-adm.component';
import { ModifierComponent } from './modifier/modifier.component';
import { TableauUserComponent } from './tableau-user/tableau-user.component';
import { TableauArchComponent } from './tableau-arch/tableau-arch.component';

const routes: Routes = [
  {path: 'tableau-adm',component:TableauAdmComponent},
  {path: 'modifier/:id',component:ModifierComponent},
  {path: 'tableau-user',component:TableauUserComponent},
  {path: 'tableau-arch',component:TableauArchComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
