import { Component } from '@angular/core';
import { Practice } from 'src/app/practice-interface';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent {
    Person: Practice = {
      id: 1,
      name : "ABC"
    }
}
