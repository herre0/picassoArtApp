import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/client/models/category';
import { Painting } from 'src/app/client/models/painting';
import { AdminService } from 'src/app/client/services/admin.service';
import { UserService } from 'src/app/client/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
  content: string;
  isAdmin = false;
  form: any = {};
  errorMessage = '';
  message = '';
  isFailed = false;
  isSuccess = false;
  isImageShowed = false;
  painting = new Painting();
  categories = new Array<Category>();

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

    this.adminService.getCategoryList().subscribe(data => {
      this.categories = data;
    })
  }

  onSubmit(): void {
    
    console.log(this.painting)
    if (this.checkEmptyFields()) {
      this.adminService.create(this.painting).subscribe(
        data => {
          this.isSuccess = true;
          this.message = data.message;
          this.painting = new Painting();
        },
        err => {
          this.errorMessage = JSON.parse(err.error).message;
        }
      );
    } else {
      this.isFailed = true;
      this.errorMessage = 'Zorunlu Alanları Doldurun!';
    }
  }

  checkEmptyFields() {
    if (this.painting.name != undefined && this.painting.name != "" &&
      this.painting.description != undefined && this.painting.description != "" &&
      this.painting.category != undefined && this.painting.category != "" &&
      this.painting.imageUrl != undefined && this.painting.imageUrl != "")
      return true;
    else
      return false;
  }

  changeImage() {
    if (this.painting.imageUrl != null)
      this.isImageShowed = true;
    else
      this.isImageShowed = false;

  }

}
