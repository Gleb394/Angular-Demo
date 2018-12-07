import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CategoriesComponent} from './categories/categories.component';
import {CategoryService} from './services/category.service';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import {UserService} from './services/user';

const appRouts: Routes = [
  {path: 'categories', component: CategoriesComponent},
  {path: 'registration', component : RegistrationComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    RegistrationComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRouts
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [CategoryService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
