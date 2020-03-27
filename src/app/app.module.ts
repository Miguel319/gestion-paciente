import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArrayImplementationComponent } from './components/array-implementation/array-implementation.component';
import { LinkedListImplementationComponent } from './components/linked-list-implementation/linked-list-implementation.component';
import { ArrayListComponent } from './components/array-implementation/array-list/array-list.component';
import { ArrayEditComponent } from './components/array-implementation/array-edit/array-edit.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListLinkedComponent } from './components/linked-list-implementation/list-linked/list-linked.component';
import { EditLinkedComponent } from './components/linked-list-implementation/edit-linked/edit-linked.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayImplementationComponent,
    LinkedListImplementationComponent,
    ArrayListComponent,
    ArrayEditComponent,
    HomeComponent,
    NavbarComponent,
    ListLinkedComponent,
    EditLinkedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
