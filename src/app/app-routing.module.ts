import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AddActionComponent } from './GestionAction/add-action/add-action.component';
import { EditActionComponent } from './GestionAction/edit-action/edit-action.component';
import { ListeActionComponent } from './GestionAction/liste-action/liste-action.component';
import { ShowActionComponent } from './GestionAction/show-action/show-action.component';

import { AdPaComponent } from './GestionPrixAction/ad-pa/ad-pa.component';

import { ListActionsComponent } from './GestionPortefeuille/list-actions/list-actions.component';
import { MesActionsComponent } from './GestionPortefeuille/mes-actions/mes-actions.component';
import { DetailsActionsComponent } from './GestionPortefeuille/details-actions/details-actions.component';

import { AddObligationComponent } from './GestionObligation/add-obligation/add-obligation.component';
import { EditObligationComponent } from './GestionObligation/edit-obligation/edit-obligation.component';
import { ShowObligationComponent } from './GestionObligation/show-obligation/show-obligation.component';
import { ListObligationComponent } from './GestionObligation/list-obligation/list-obligation.component';

const routes: Routes = [
  {path:"home", component:AppComponent},
  {path:"action/listaction", component:ListeActionComponent},
  {path:"action/show/:id", component:ShowActionComponent},
  {path:"action/add", component:AddActionComponent},
  {path:"action/edit/:id", component:EditActionComponent},
  {path:"prixAction/:id/:name", component:AdPaComponent},
  {path:"portfeuille/", component:ListActionsComponent},
  {path:"portfeuille/:id", component:MesActionsComponent},
  {path:"prixAction/:idC/:idA", component:DetailsActionsComponent},
  {path:"obligation/add", component:AddObligationComponent},
  {path:"obligation/list", component:ListObligationComponent},
  {path:"obligation/edit/:id", component:EditObligationComponent},
  {path:"obligation/show/id", component:ShowObligationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
