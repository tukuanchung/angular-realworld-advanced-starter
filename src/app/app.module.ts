import { PostsModule } from './posts/posts.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, LayoutModule, AppRoutingModule, PostsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
