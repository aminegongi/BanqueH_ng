import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddActionComponent } from './GestionAction/add-action/add-action.component';
import { EditActionComponent } from './GestionAction/edit-action/edit-action.component';
import { ListeActionComponent } from './GestionAction/liste-action/liste-action.component';
import { ShowActionComponent } from './GestionAction/show-action/show-action.component';
import { HeaderComponent } from './header/header.component';
import { AdPaComponent } from './GestionPrixAction/ad-pa/ad-pa.component';
import { ListActionsComponent } from './GestionPortefeuille/list-actions/list-actions.component';
import { MesActionsComponent } from './GestionPortefeuille/mes-actions/mes-actions.component';
import { DetailsActionsComponent } from './GestionPortefeuille/details-actions/details-actions.component';
import { AddObligationComponent } from './GestionObligation/add-obligation/add-obligation.component';
import { ListObligationComponent } from './GestionObligation/list-obligation/list-obligation.component';
import { EditObligationComponent } from './GestionObligation/edit-obligation/edit-obligation.component';
import { ShowObligationComponent } from './GestionObligation/show-obligation/show-obligation.component';


@NgModule({
  declarations: [
    AppComponent,
    AddActionComponent,
    EditActionComponent,
    ListeActionComponent,
    ShowActionComponent,
    HeaderComponent,
    AdPaComponent,
    ListActionsComponent,
    MesActionsComponent,
    DetailsActionsComponent,
    AddObligationComponent,
    ListObligationComponent,
    EditObligationComponent,
    ShowObligationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
