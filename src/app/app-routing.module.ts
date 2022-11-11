import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigatorComponent } from './core/navigator/navigator.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/page.module').then((m) => m.PageModule),
  },
  {
    path: 'navigator',
    component: NavigatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
