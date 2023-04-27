import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactInterfaceService {

  constructor(private http: HttpClient) { }

  private contactsUrl = 'api/contacts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl).pipe(
      catchError(this.handleError<Contact[]>('getContacts', []))
    )
  }

  getContact(id:number) : Observable<Contact>{
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Contact>(url).pipe(
      catchError(this.handleError<Contact>(`getContact id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  updateContact(contact: Contact): Observable<any>{
    return this.http.put(this.contactsUrl, contact, this.httpOptions).pipe(
      catchError(this.handleError<Contact>('updateContact'))
    );
  }

  addContact(contact : Contact): Observable<Contact>{
    return this.http.post<Contact>(this.contactsUrl, contact, this.httpOptions).pipe(
      catchError(this.handleError<Contact>("addContact"))
    );
  }

  removeContact(id:number):Observable<Contact>{
    const url = `${this.contactsUrl}/${id}`;
    return this.http.delete<Contact>(url, this.httpOptions).pipe(
      catchError(this.handleError<Contact>("removeContact"))
    );
  }
  
}
