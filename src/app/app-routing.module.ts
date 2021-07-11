import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './client/pages/about/about.component';
import { CategoryComponent } from './client/pages/admin/category/category.component';
import { CreateComponent } from './client/pages/admin/create/create.component';
import { EditComponent } from './client/pages/admin/edit/edit.component';
import { ListComponent } from './client/pages/admin/list/list.component';
import { SettingsComponent } from './client/pages/admin/settings/settings.component';
import { ContactComponent } from './client/pages/contact/contact.component';
import { DetailComponent } from './client/pages/detail/detail.component';
import { GalleryComponent } from './client/pages/gallery/gallery.component';
import { HomeComponent } from './client/pages/home/home.component';
import { LoginComponent } from './client/pages/login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'list', component: ListComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
