import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_helpers';
import { PostsViewComponent } from './_components/posts-view/posts-view.component';
import { SignupComponent } from './_components/auth/signup/signup.component';
import { SigninComponent } from './_components/auth/signin/signin.component';
import { ErrorComponent } from './_components/error/error.component';
import { HomeComponent } from './_components/home/home.component';
import { AccountComponent } from './_components/account/account.component';
import { NewPostComponent } from './_components/posts-view/posts/new-post/new-post.component';
import { GroupsComponent } from './_components/groups/groups.component';
import { NewGroupComponent } from './_components/groups/new-group/new-group.component';

const routes: Routes = [
  { path: 'posts', component: PostsViewComponent, canActivate: [AuthGuard] },
  { path: 'newpost', component: NewPostComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'newgroup', component: NewGroupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'error', component: ErrorComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





