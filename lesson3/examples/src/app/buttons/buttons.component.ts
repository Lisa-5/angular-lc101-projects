import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons";
   active: boolean = true;
   activeButton: boolean[] = [true, true, true];
   location: string ='center';

   
   constructor() { }

   ngOnInit() { }

   reactivate() {
      for (let i = 0; i< this.activeButton.length; i++) {
         this.activeButton[i] = true;
      }
      return this.activeButton;
   }

   shiftLocation(oldLocation: string) {
      while (this.location ===oldLocation) {
         this.location = ['left', 'right', 'center'][Math.floor(Math.random()*3)]
      }
      return this.location;
   }

}
