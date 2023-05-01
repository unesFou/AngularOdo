import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { DetailContactComponent } from './contact/detail-contact/detail-contact.component';
import { ContactCardComponent } from './contact/contact-card/contact-card.component'
import { ListContactComponent } from './contact/list-contact/list-contact.component';

const routes: Routes = [
  {path:'' , redirectTo:'contact-card', pathMatch:'full'},
  {path:'contact-card' , component : ContactCardComponent },
  {path:'list-contact', component:ListContactComponent},
  {path:'detail-contact' , component:DetailContactComponent},
  {path:'add-contact' , component:AddContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
