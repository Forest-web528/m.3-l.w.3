import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ContactsComponent } from '../pages/contacts/contacts.component';

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<ContactsComponent> {
  canDeactivate(): boolean {
    return confirm("Вы уверены, что хотите покинуть эту страницу?");
  }
}
