import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  translate: any;

  constructor() { }

  showNotification(message: string) {
    // Implementation for showing notification
    alert(message);
  }
  showSuccess(msg: string, params?: any) {
    severity: 'success'
  }
  getMessageValue(msg: string, params: any): any {
    throw new Error('Method not implemented.');
  }
  setMessage(arg0: { severity: string; summary: any; detail: any; }) {
    throw new Error('Method not implemented.');
  }
}
