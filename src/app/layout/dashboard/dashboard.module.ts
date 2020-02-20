import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialcomponentsModule } from 'src/app/materialcomponents/materialcomponents.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialcomponentsModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false })
  ]
})
export class DashboardModule {}
