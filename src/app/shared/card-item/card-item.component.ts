import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CardInfo } from '../card-info';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent {
  @Input() cardInfo: CardInfo = {
    header: '',
    content: '',
    imagePath: '',
    hyperlink: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
