import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout.routing';
import { SidebarComponent } from '../component/sidebar/sidebar.component';
import { TopnavComponent } from '../component/topnav/topnav.component';
import { LayoutComponent } from './layout.component';
import { MaterialcomponentsModule } from '../materialcomponents/materialcomponents.module';
import { CreatecontestComponent } from './createcontest/createcontest.component';
import { EditcontestComponent } from './editcontest/editcontest.component';
import { UsersComponent } from './users/users.component';
import { ResultsComponent } from './results/results.component';
import { ContestsComponent } from './contests/contests.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    TopnavComponent,
    CreatecontestComponent,
    EditcontestComponent,
    UsersComponent,
    ResultsComponent,
    ContestsComponent
  ],
  imports: [CommonModule, LayoutRoutingModule , MaterialcomponentsModule]
})
export class LayoutModule {}
