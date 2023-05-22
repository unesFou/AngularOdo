import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  providers : [ContactService]
})

export class ListContactComponent implements OnInit {

  contacts : any = []  ;
  ctn : any;
  ischecked : boolean = false ;
  checkAll : boolean = false ;
  btn : boolean = false;
  
  constructor(
    private router:Router,
    private contactService : ContactService) 
    { this.router.routeReuseStrategy.shouldReuseRoute = () => false   }
  

  ngOnInit() : void {
    this.contactService.getContacts().subscribe(data => {
      this.contacts.push(data)
    });
  } 

  detailsContact(id : number){
    this.contactService.getContactById(id).subscribe(data =>{
      this.ctn = data;
      console.log(this.ctn);
      this.router.navigate(['/detail-contact' , this.ctn.id]);
    });
  }

  deleteAllByIds() :void {
    if(window.confirm('Are sure you want to delete this item ?')){
    let list : number[] = [] ;
    for(var i = 0;i<this.contacts[0].length;i++){
      if (this.contacts[0][i].ischecked){
        list.push(this.contacts[0][i].id)
        }
      }
    this.contactService.deleteProductsByIds(list).subscribe(
      ()=>{
      console.log(' is delete successfuly')
      this.router.navigate([('/list-contact')]);
     });
     }
    
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

