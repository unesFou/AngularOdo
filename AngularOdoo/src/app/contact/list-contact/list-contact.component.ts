import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContactService } from '../contact.service'
import { contact } from '../model/contact'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  providers : [ContactService]
})

export class ListContactComponent implements OnInit {

  contacts :  any[] = [] ;
  
  ctn : any;
  @Output() buttonWasClicked = new EventEmitter<contact>();

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private contactService : ContactService) {   }

  ngOnInit() {
  this.contactService.getContacts().subscribe(data => {
    this.contacts.push(data)
    console.table(this.contacts)
  });
  }

  onButtonClick() {
    this.buttonWasClicked.emit(this.ctn);
    }

  detailsContact(id : number){
    this.contactService.getContactById(id).subscribe(data =>{
      this.ctn = data;
      console.log(this.ctn);
      this.router.navigate(['/detail-contact' , this.ctn.id]);
      //console.log();
    });
  }
}
