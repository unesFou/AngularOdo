import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { contact} from '../model/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html'
})
export class AddContactComponent implements OnInit {

  ctn : contact = <contact>{}
  constructor(private contactService : ContactService) { 
  }

  ngOnInit(): void {
  }

  saveContact(): void { 
    this.contactService.create(this.ctn).subscribe({
        next: (res) => {
          console.log(res);
          //this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }


}
