import { Component, OnInit } from '@angular/core';
import { Painting } from 'src/app/client/models/painting';
import { Settings } from 'src/app/client/models/settings';
import { AdminService } from 'src/app/client/services/admin.service';
import { UserService } from 'src/app/client/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
  content: string;
  isAdmin = false;
  form: any = {};
  errorMessage = '';
  message = '';
  isFailed = false;
  isSuccess = false;
  isImageShowed = false;
  isImageShowed2 = false;
  painting = new Painting();
  settings = new Settings();

  constructor(private userService: UserService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        if (data == 'Admin')
          this.isAdmin = true;

      },
      err => {
        this.isAdmin = false;
        this.content = JSON.parse(err.error).message;
      }
    );

    this.adminService.getSettings().subscribe(
      data => {
        this.settings = data;
        this.changeImage();
        this.changeImg();
      },
      err => {
        this.errorMessage = JSON.parse(err.error).message;
      }
    );

  }

  onSubmit(): void {
    this.adminService.updateSettings(this.settings).subscribe(
      data => {
        this.isSuccess = true;
        this.message = data.message;
        setTimeout(() => { 
          this.isSuccess = false;
          window.location.reload();
         }, 500);

      },
      err => {
        this.errorMessage = JSON.parse(err.error).message;
      }
    );
  }

  changeImage() {
    if (this.settings.photo != null)
      this.isImageShowed = true;
    else
      this.isImageShowed = false;
  }
  changeImg() {
    if (this.settings.titleLogo != null)
      this.isImageShowed2 = true;
    else
      this.isImageShowed2 = false;
  }
}
