import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/client/models/category';
import { AdminService } from 'src/app/client/services/admin.service';
import { UserService } from 'src/app/client/services/user.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
  isAdmin = false;
  content = '';
  errorMessage = '';
  message = '';
  isFailed = false;
  isSuccess = false;
  category = new Category();
  categories = new Array<Category>();

  constructor(private adminService: AdminService, private userService: UserService) { }

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
    if(this.category.name != undefined && this.category.name != ""){
    this.adminService.createCategory(this.category).subscribe(
      data => {
        this.category.name = '';
        window.location.reload();
      },
      err => {
        this.isFailed = true;
        this.errorMessage = JSON.parse(err.error).message;
      }
    );
    } else {
        this.isFailed = true;
        this.errorMessage = 'Boş olamaz';
    }
  }

  deleteItem(id: number) {
    this.adminService.deleteCategory(id).subscribe(
      data => {
        this.isSuccess = true;
        this.message = data.message;
        window.location.reload();
      },
      err => {
        this.isFailed = true;
        this.errorMessage = JSON.parse(err.error).message;
      }
    );
  }

}
