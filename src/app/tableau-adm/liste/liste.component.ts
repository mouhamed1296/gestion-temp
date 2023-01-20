import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  @Input() donnes!: User;
  @Input() delete!: Function
  @Input() recupereDonne!: Function
  @Input() changeRole!: Function
}
