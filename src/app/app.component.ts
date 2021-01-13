import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plus-minus-ng';
  
   display = 0;
  
  plus() {
   
   this.display++;
  }

  minus() {
    
   this.display--;
  }
  
}
