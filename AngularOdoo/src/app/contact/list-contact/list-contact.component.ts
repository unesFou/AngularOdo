import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service'
import { contact } from '../model/contact'

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  providers : [ContactService]
})

export class ListContactComponent implements OnInit {

  contacts :  any[] = [] ;

  constructor(private contactService : ContactService) {   }

  ngOnInit() {
  this.contactService.getContacts().subscribe(data => {
    this.contacts.push(data)
    console.table(this.contacts)
  });
  }
}
