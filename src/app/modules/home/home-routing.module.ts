import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }
];
const routing: ModuleWithProviders = RouterModule.forChild(routes);
@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
