import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrayImplementationComponent } from './components/array-implementation/array-implementation.component';
import { HomeComponent } from './components/home/home.component';
import { ArrayListComponent } from './components/array-implementation/array-list/array-list.component';
import { LinkedListImplementationComponent } from './components/linked-list-implementation/linked-list-implementation.component';
import { ArrayEditComponent } from './components/array-implementation/array-edit/array-edit.component';
import { EditLinkedComponent } from './components/linked-list-implementation/edit-linked/edit-linked.component';
import { ContainsArrayListComponent } from './components/array-implementation/contains-array-list/contains-array-list.component';
import { ContainsLinkedListComponent } from './components/linked-list-implementation/contains-linked-list/contains-linked-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'array-list', component: ArrayImplementationComponent },
  { path: 'array-edit', component: ArrayEditComponent },
  { path: 'linked-list', component: LinkedListImplementationComponent },
  { path: 'linked-edit', component: EditLinkedComponent },
  { path: 'contains-array-list', component: ContainsArrayListComponent },
  { path: 'contains-linked-list', component: ContainsLinkedListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
