import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;

   constructor() { }

   ngOnInit() { }

   // inactiveAll() {
   //    this.inactiveGold = true;
   //    this.inactiveSilver = true;
   //    this.inactiveCopper = true;
   // }

}
