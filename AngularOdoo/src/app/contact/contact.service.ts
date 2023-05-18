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

getContacts() : Observable<any>{
 return this.httpClient.get<any>(this.URL + this.Endpoint_Contact)
}

create(ctn: contact): Observable<contact> {
  return this.httpClient.post(this.URL+'add', ctn);
}

getContactById(id : number){
  return this.httpClient.get(this.URL + id)
 }

 deleteProductsByIds(ids: Number[]) : Observable<Number[]>{
  const url = `${this.URL}?ids=${ids.join(',')}`;
  return this.httpClient.delete<number[]>(url);
}

updateContacts(ctn: contact): Observable<any> {
  const url = `${this.URL}${ctn.id}`;
  return this.httpClient.put<contact>(url, ctn);
}
}
