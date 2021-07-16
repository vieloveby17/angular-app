import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    PostsComponent,
    HomeComponent,
  ],
  imports: [
            BrowserModule,
            AppRoutingModule,
            ReactiveFormsModule,
            FormsModule
          ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
