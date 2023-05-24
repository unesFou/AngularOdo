import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { ContactCardComponent } from './contact/contact-card/contact-card.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ListContactComponent } from './contact/list-contact/list-contact.component';
import { FormsModule } from '@angular/forms';
import { DetailContactComponent } from './contact/detail-contact/detail-contact.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [	
    AppComponent,
      AddContactComponent,
      ListContactComponent,
      ContactComponent,
      ContactCardComponent,
      DetailContactComponent
         ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatMenuModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    Ng2SearchPipeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
