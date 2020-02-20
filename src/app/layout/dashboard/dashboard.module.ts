import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialcomponentsModule } from 'src/app/materialcomponents/materialcomponents.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StatsComponent } from 'src/app/shared/modules/stats/stats.component';

@NgModule({
  declarations: [DashboardComponent, StatsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialcomponentsModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false })
  ]
})
export class DashboardModule {}
