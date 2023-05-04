import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { contact} from '../model/contact';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html'
})
export class DetailContactComponent implements OnInit {

  ctn : contact | undefined;
  constructor(private contactService : ContactService) { }

  ngOnInit(): void {
  //  this.contactService.contactService()
  }

  

}
