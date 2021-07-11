import { Component, OnInit } from '@angular/core';
import { Painting } from '../../models/painting';
import { RegularService } from '../../services/regular.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {

  paintings = new Array<Painting>();
  constructor(private regularService: RegularService) { }

  ngOnInit(): void {
    this.regularService.getList().subscribe(data => {
      this.paintings = data;         
    });


  }

}
