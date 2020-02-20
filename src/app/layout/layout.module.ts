import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout.routing';
import { SidebarComponent } from '../component/sidebar/sidebar.component';
import { TopnavComponent } from '../component/topnav/topnav.component';
import { LayoutComponent } from './layout.component';
import { MaterialcomponentsModule } from '../materialcomponents/materialcomponents.module';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    TopnavComponent
  ],
  imports: [CommonModule, LayoutRoutingModule , MaterialcomponentsModule]
})
export class LayoutModule {}
