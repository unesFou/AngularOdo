import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html'
})
export class ContactCardComponent implements OnInit {

  contacts :  any[] = [] ;
  ctn : any;

  constructor(private route: ActivatedRoute,
    private router:Router,
    private contactService : ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(data => {
      this.contacts.push(data)
      console.table(this.contacts)
    });
  }

  detailsContact(id : number){
    this.contactService.getContactById(id).subscribe(data =>{
      this.ctn = data;
      console.log(this.ctn);
      this.router.navigate(['/detail-contact' , this.ctn.id]);
    });
  }

}
