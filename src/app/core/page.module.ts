import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
import { CardComponent } from './card/card.component';
import { NavigatorComponent } from './navigator/navigator.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [PageComponent, CardComponent, NavigatorComponent],
})
export class PageModule {}
