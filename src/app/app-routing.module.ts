import { EditorComponent } from './posts/editor/editor.component';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts/posts.component';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './layout/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: MainComponent,
   loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
  {path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
 }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
