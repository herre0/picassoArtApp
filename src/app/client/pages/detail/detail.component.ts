import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Painting } from '../../models/painting';
import { Settings } from '../../models/settings';
import { AdminService } from '../../services/admin.service';
import { RegularService } from '../../services/regular.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  painting = new Painting();
  settings = new Settings();

  constructor(private route: ActivatedRoute, private regularService: RegularService) { }

  ngOnInit(): void {    
    this.regularService.getOne(Number(this.route.snapshot.paramMap.get('id'))).subscribe(data => {
      this.painting = data;
    });

    this.regularService.getSettings().subscribe(data => {
      this.settings = data;
    });
  }

}
