import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'university-front-end';

  handleClick() {
    this.title = this.title === 'Updated Title' ? 'university-front-end' : 'Updated Title';
  }
}
