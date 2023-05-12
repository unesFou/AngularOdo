import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { contact } from './model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

readonly URL = 'http://localhost:8080/contact/'
readonly Endpoint_Contact = 'all'
constructor(private httpClient : HttpClient) { }

getContacts(){
 return this.httpClient.get(this.URL + this.Endpoint_Contact)
}

create(ctn: contact): Observable<contact> {
  return this.httpClient.post(this.URL+'add', ctn);
}

getContactById(id : number){
  return this.httpClient.get(this.URL + id)
 }

 deleteProductsByIds(ids: Number[]): Observable<any> {
  const url = `${this.URL}?ids=${ids.join(',')}`;
  return this.httpClient.delete(url);
}

updateContacts(ctn: contact): Observable<contact> {
  const url = `${this.URL}${ctn.id}`;
  return this.httpClient.put<contact>(url, ctn);
}
}
