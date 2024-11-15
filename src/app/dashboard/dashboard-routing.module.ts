import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from '../test/test.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'overview', component: HomeComponent },
  { path: 'navigation1', component: TestComponent },
  { path: 'navigation2', component: TestComponent },
  { path: 'account-settings', component: TestComponent },
  { path: 'help', component: TestComponent },
  { path: 'dark-mode', component: TestComponent },
  { path: '', redirectTo: 'overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
