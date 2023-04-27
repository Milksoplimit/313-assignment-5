import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from './contact'

@Injectable({
  providedIn: 'root'
})
export class ContactDataService implements InMemoryDbService{
  createDb(){
    const contacts =[
      {id:1, fname: "John", lname:"Smith", email:"john.smith@example.com", phone: "7011234567", color: "green"},
      {id:2, fname: "Jane", lname:"Doe", email:"janedoe@example.com", phone: "7019876543", color: "gray"},
      {id:3, fname: "Barrack", lname:"Obama", email:"bobama@example.com", phone: "4206912345", color: "red"},
    ];
    return {contacts};
  }

  genId(contacts : Contact[]) : number {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 1;
  }
  
}