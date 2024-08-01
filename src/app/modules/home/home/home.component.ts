import { Component } from '@angular/core';
import { CardInfo } from '../../../shared/card-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ongoingProjectList: Array<CardInfo> = [
    {
      header: 'GDSC-UTP GC',
      content:
        'Google Classroom started to share workshop materials to all UTP students and other interested people. With hands-on tutorians and full explainations on latest technologies such as TensorFlow, Flutter, Firebase, GitHub and more.',
      imagePath: '/public/assets/gdsc_utp_logo.webp',
      // hyperlink: 'https://classroom.google.com/c/NjkzNzI5NzE5NTUy?cjc=tlab4o7',
      hyperlink: ['/projects', ''],
      fragment: 'googleclassroom',
    },
    {
      header: 'Coming Soon!',
      content:
        'Exciting new content is on the way! Stay tuned for updates and be the first to discover what\'s coming next. Check back soon for more details and information!',
      imagePath: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      hyperlink: 'https://github.com/luhouyang',
      fragment: 'googleclassroom',
    },
    {
      header: 'Coming Soon!',
      content:
        'Exciting new content is on the way! Stay tuned for updates and be the first to discover what\'s coming next. Check back soon for more details and information!',
      imagePath: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      hyperlink: 'https://github.com/luhouyang',
      fragment: 'googleclassroom',
    },
  ];
}
