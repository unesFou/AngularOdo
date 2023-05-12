import { Component, OnInit, } from '@angular/core';
import { ContactService } from '../contact.service';
import { contact} from '../model/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html'
})
export class DetailContactComponent implements OnInit {

  ctn : contact ={};
  id : number = 0;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private contactService : ContactService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.contactService.getContactById(this.id).subscribe(data =>
      {
        this.ctn = data;
      }
      )
  }

  onSubmit() {
    this.contactService.updateContacts(this.ctn).subscribe(data  => {
      console.log('Contact updated successfully:', data);
    }, error => {
      console.error('Error updating Contact:', error);
    });
  }

  

}
