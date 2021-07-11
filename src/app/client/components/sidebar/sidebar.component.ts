import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Menu } from '../../models/menu';
import { Settings } from '../../models/settings';
import { RegularService } from '../../services/regular.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
@Injectable()
export class SidebarComponent implements OnInit {
  isLoggedIn = false;
  name: string;
  showAdminBoard = false;
  isOpen = false;
  private roles: string[];
  url: string;
  settings = new Settings();
  menus : Array<Menu> = [
    new Menu('home', false, false, 'rgba(255, 255, 255, 0.8)', '/home'),
    new Menu('gallery', false, false, 'rgba(255, 255, 255, 0.8)', '/gallery'),
    new Menu('about', false, false, 'rgba(255, 255, 255, 0.8)', '/about'),
    new Menu('contact', false, false, 'rgba(255, 255, 255, 0.8)', '/contact'),
    new Menu('create', false, true, 'red', '/create'),
    new Menu('list', false, true, 'red', '/list'),
    new Menu('settings', false, true, 'red', '/settings'),
    new Menu('category', false, true, 'red', '/category'),
   ];

  constructor(@Inject(DOCUMENT) private _document: HTMLDocument,private tokenStorage: TokenStorageService,private titleService:Title, private router: Router, private regularService: RegularService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      const user = this.tokenStorage.getUser();
      this.name = user.username;
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    }    

    this.url = this.router['location']._platformLocation.location.pathname;
    this.url = this.url.substring(1, this.url.length);
    this.changeActive(this.url);
    this.changeRoute();
    this.regularService.getSettings().subscribe(data => {
      this.settings = data;
      this.titleService.setTitle(this.settings.siteTitle);
      this._document.getElementById('appFavicon').setAttribute('href', this.settings.titleLogo);

    });
  }

  showAdmin(isAdmin: boolean) {
    return (!isAdmin || this.showAdminBoard)
  }

  changeRoute() {
    if(!this.isLoggedIn) {
      for(let i = 0; i < this.menus.length; i++) {
        if(this.url == this.menus[i].name && this.menus[i].isAdmin)
          this.router.navigateByUrl('/home')        
      }
    }
  }

  changeActive(name) {
    for(let i = 0; i < this.menus.length; i++) {
      if(this.menus[i].name == name)
        this.menus[i].isActive = true;
      else
        this.menus[i].isActive = false;
    }
  }

  openSideBar() {
    this.isOpen = !this.isOpen;
  }

  signOut() {
    this.tokenStorage.signOut();
    window.location.reload();
  }

}

