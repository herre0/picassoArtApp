import { Component, OnInit } from '@angular/core';
import { Settings } from '../../models/settings';
import { RegularService } from '../../services/regular.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  settings = new Settings();
  constructor(private regularService: RegularService) { }

  ngOnInit(): void {
    this.regularService.getSettings().subscribe(data => {
        this.settings = data;
      });


      
  }

  putAlert() {
    alert('Use Instagram or Email for messaging')
  }
}
