import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact';
import { ContactInterfaceService } from '../contact-interface.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{
 
 contacts : Contact[] = [];

 constructor(private contactService : ContactInterfaceService){}

 ngOnInit(): void {
     this.getContacts();
 }

 getContacts() : void{
  this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);
 }

 removeContact(contact : Contact):void{
  this.contactService.removeContact(contact.id).subscribe();
 }

}
