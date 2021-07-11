import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/pages/home/home.component';
import { AboutComponent } from './client/pages/about/about.component';
import { GalleryComponent } from './client/pages/gallery/gallery.component';
import { ContactComponent } from './client/pages/contact/contact.component';
import { LoginComponent } from './client/pages/login/login.component';
import { CreateComponent } from './client/pages/admin/create/create.component';
import { ListComponent } from './client/pages/admin/list/list.component';
import { SettingsComponent } from './client/pages/admin/settings/settings.component';
import { SidebarComponent } from './client/components/sidebar/sidebar.component';
import { DetailComponent } from './client/pages/detail/detail.component';
import { authInterceptorProviders  } from './client/helpers/auth.interceptor';
import { EditComponent } from './client/pages/admin/edit/edit.component';
import { CategoryComponent } from './client/pages/admin/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    LoginComponent,
    CreateComponent,
    ListComponent,
    SettingsComponent,
    SidebarComponent,
    DetailComponent,
    EditComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
