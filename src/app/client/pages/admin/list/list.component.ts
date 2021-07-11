import { Component, OnInit } from '@angular/core';
import { Painting } from 'src/app/client/models/painting';
import { AdminService } from 'src/app/client/services/admin.service';
import { UserService } from 'src/app/client/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  content: string;
  isAdmin = false;
  paintings = new Array<Painting>();
  isError = false;
  message = '';
  errorMessage = '';
  isSuccess = false

  constructor(private userService: UserService, private adminService: AdminService) { }

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

    this.adminService.getList().subscribe(data => {
      this.paintings = data;     
      this.shorterText();
    }, err => {           
      this.isError = true;
      this.errorMessage = JSON.parse(err.error).message;
    });

  }

  shorterText() {
    for(let i of this.paintings) {
      i.description = i.description.substring(0, 13) + ((i.description.length <= 13) ? "" : "...");
      i.name = i.name.substring(0, 13) + ((i.name.length <= 13) ? "" : "...");
    }
  }

  deleteItem(id: number) {
    if(confirm("Silmek istediğinizden emin misiniz?")){
    this.adminService.delete(id).subscribe(data => {
      this.isSuccess = true;
      this.message = data.message;
      setTimeout(this.afterDeletion, 500);
    },
    err => {           
      this.isError = true;
      this.errorMessage = JSON.parse(err.error).message;
    });
  }
  }

  afterDeletion() {
    this.isSuccess = false;
    window.location.reload();
  }


}
