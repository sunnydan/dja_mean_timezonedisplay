import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Timezone Display';
  time = Date.now();
  zone = "PST";
  diff = 0;
  showtime = true;
}
