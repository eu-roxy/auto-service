import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DashboardContainerComponent } from './containers/dashboard/dashboard-container.component';
import { DashboardCardsComponent } from './components/dashboard-cards/dashboard-cards.component';


@NgModule({
  declarations: [
    DashboardContainerComponent,
    DashboardCardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule
  ],
  providers: []
})
export class DashboardModule { }
