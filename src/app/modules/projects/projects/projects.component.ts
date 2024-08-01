import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { CardInfo } from '../../../shared/card-info';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(private route: ActivatedRoute) {

  }
  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id: string =  params['id'];
    });
  }
  // ongoingProjectList: Array<CardInfo> = [
  //   {
  //     header: 'GDSC-UTP GC',
  //     content:
  //       'Google Classroom started to share workshop materials to all UTP students and other interested people. With hands-on tutorians and full explainations on latest technologies such as TensorFlow, Flutter, Firebase, GitHub and more. The materials are maintained by me and my friends as a side project and initiative to raise technicality level of students',
  //     imagePath: '/public/assets/gdsc_utp_logo.png',
  //     hyperlink: 'https://classroom.google.com/c/NjkzNzI5NzE5NTUy?cjc=tlab4o7',
  //   },
  //   {
  //     header: 'testing string',
  //     content:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     imagePath: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
  //     hyperlink: 'https://github.com/luhouyang',
  //   },
  //   {
  //     header: 'testing string',
  //     content:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     imagePath: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
  //     hyperlink: 'https://github.com/luhouyang',
  //   },
  // ];
}
