import { Routes , RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import {SuperloginComponent} from './superlogin/superlogin.component';
const routes: Routes = [
  {path: '', component: SuperloginComponent, pathMatch: 'full'}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
