import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/component/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/component/employee-detail/employee-detail.component';


const routes: Routes = [
  { path: "employees", component: EmployeeListComponent},
  { path: "employees/:id", component: EmployeeDetailComponent},
  { path: '**', redirectTo: 'employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
