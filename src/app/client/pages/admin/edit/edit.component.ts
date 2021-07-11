import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/client/models/category';
import { Painting } from 'src/app/client/models/painting';
import { AdminService } from 'src/app/client/services/admin.service';
import { UserService } from 'src/app/client/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
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

  constructor(private userService: UserService, private route: ActivatedRoute, private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        if(data == 'Admin')
          this.isAdmin = true;
        
      },
      err => {
        this.isAdmin = false;
        this.content = JSON.parse(err.error).message;
      }
    );

    this.adminService.getOne(Number(this.route.snapshot.paramMap.get('id'))).subscribe(data => {
      this.painting = data;
      this.changeImage();
    });

    this.adminService.getCategoryList().subscribe(data => {
      this.categories = data;
    })

   
  }

  onSubmit(): void {

    this.adminService.edit(this.painting).subscribe(
      data => {        
        this.isSuccess = true;
        this.message = data.message;
        setTimeout(() => {this.router.navigateByUrl('/list')}, 1000)    
      },
      err => {        
        this.errorMessage = JSON.parse(err.error).message;
      }
    );
      
  }

  changeImage() {
    if(this.painting.imageUrl != null)
      this.isImageShowed = true;
      else
      this.isImageShowed = false;

  }

}
