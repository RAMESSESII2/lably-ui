import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { HomeComponent } from './home/home.component';
import { LabsComponent } from './labs/labs.component';
import { TestsComponent } from './tests/tests.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'labs', component:LabsComponent},
  {path: 'admins', component:AdminsComponent},
  {path: 'tests', component:TestsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
