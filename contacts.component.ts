import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.contactId = this.route.snapshot.paramMap.get('id');
  }
}
