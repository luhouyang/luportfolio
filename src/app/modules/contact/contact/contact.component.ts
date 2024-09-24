import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements AfterViewInit {
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit() {
    // Only run this logic if we're in the browser
    if (isPlatformBrowser(this.platformId)) {
      const header = document.getElementById('header');
      if (header) {
        header.classList.add('scrolled');
      }
    }
  }

  onSubmit() {
    if (
      this.contactData.name &&
      this.contactData.email &&
      this.contactData.message
    ) {
      console.log('Form Data: ', this.contactData);
      // Placeholder for form submission logic, e.g., send the data to a server
      alert('Thank you for reaching out! We will get back to you shortly.');
    }
  }
}
