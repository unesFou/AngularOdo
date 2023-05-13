import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  providers : [ContactService]
})

export class ListContactComponent implements OnInit {

  contacts :  any[] = [] ;
  ctn : any;
  ischecked : boolean = false ;
  checkAll : boolean = false ;
  btn : boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private contactService : ContactService) 
    {    }

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

  toggleButtone() : boolean | any {
  let list : Boolean[] = [] ;
    for(var i = 0;i<this.contacts[0].length;i++){
      if (this.contacts[0][i].ischecked){
          list.push(this.contacts[0][i].ischecked)
        }
      }
      if (list.length > 0 )
        return this.btn = true;
      else return this.btn = false;
      }

  deleteAllByIds() {
    let list : Number[] = [] ;
    for(var i = 0;i<this.contacts[0].length;i++){
      if (this.contacts[0][i].ischecked){list.push(this.contacts[0][i].id)}
      }
      this.contactService.deleteProductsByIds(list).subscribe(data =>
        this.contacts = data);
        this.router.navigate(['/list-contact']);
    }

    checkAllChanged() : any {
      for (let item of this.contacts[0]) {
        if (this.checkAll == true){
            item.ischecked = true;
            this.btn = true;}
        else if (this.checkAll == false){
          item.ischecked = false;
          this.btn = false;}
        }
}
}

