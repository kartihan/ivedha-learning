
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes:  Routes = [
  { path: 'Dashboard', component: AppComponent }
];

@NgModule({
  exports : [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {


}
