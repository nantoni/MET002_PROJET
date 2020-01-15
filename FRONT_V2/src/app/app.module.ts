import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './_components/menu/menu.component';
import { FiltersComponent } from './_components/posts-view/filters/filters.component';
import { PostsComponent } from './_components/posts-view/posts/posts.component';
import { FooterComponent } from './_components/footer/footer.component';
import { PostsViewComponent } from './_components/posts-view/posts-view.component';
import { ErrorComponent } from './_components/error/error.component';
import { AuthComponent } from './_components/auth/auth.component';
import { GroupsComponent } from './_components/groups/groups.component';
import { GroupComponent } from './_components/groups/group/group.component';
import { PostComponent } from './_components/posts-view/posts/post/post.component';
import { SigninComponent } from './_components/auth/signin/signin.component';
import { SignupComponent } from './_components/auth/signup/signup.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './_components/home/home.component';
import { AccountComponent } from './_components/account/account.component';
import { NewGroupComponent } from './_components/groups/new-group/new-group.component';
import { NewPostComponent } from './_components/posts-view/posts/new-post/new-post.component';
import { AppState } from './_store/app-state';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FiltersComponent,
    PostsComponent,
    FooterComponent,
    PostsViewComponent,
    ErrorComponent,
    AuthComponent,
    GroupsComponent,
    GroupComponent,
    PostComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    AccountComponent,
    NewGroupComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([AppState]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
