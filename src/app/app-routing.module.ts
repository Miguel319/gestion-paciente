import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrayImplementationComponent } from './components/array-implementation/array-implementation.component';
import { HomeComponent } from './components/home/home.component';
import { ArrayListComponent } from './components/array-implementation/array-list/array-list.component';
import { LinkedListImplementationComponent } from './components/linked-list-implementation/linked-list-implementation.component';
import { ArrayEditComponent } from './components/array-implementation/array-edit/array-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'array-list', component: ArrayImplementationComponent },
  { path: 'array-edit', component: ArrayEditComponent },
  { path: 'linked-list', component: LinkedListImplementationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
