import { Component, OnInit } from '@angular/core';
import { Settings } from '../../models/settings';
import { RegularService } from '../../services/regular.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  settings = new Settings();
  constructor(private regularService: RegularService) { }

  ngOnInit(): void {
    this.regularService.getSettings().subscribe(data => {
        this.settings = data;
      });


      
  }

}
