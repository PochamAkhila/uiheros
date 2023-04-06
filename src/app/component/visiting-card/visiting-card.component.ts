import { Component } from '@angular/core';
import { Visit } from 'src/app/visiting-interface';

@Component({
  selector: 'app-visiting-card',
  templateUrl: './visiting-card.component.html',
  styleUrls: ['./visiting-card.component.scss']
})
export class VisitingCardComponent {
  Visiting: Visit = {
    name: "Akhila Pocham",
    email: "akhilapocham@gmail.com",
    phone: 7788900514,
    profession: "UI/UX Developer",
    address: "@Hyderabad,kukatpally"
  }

  onPrint() {
    if (!this.Visiting.name || !this.Visiting.email || !this.Visiting.phone || !this.Visiting.profession || !this.Visiting.address) {
      return
    }
    window.print()
  }
}




