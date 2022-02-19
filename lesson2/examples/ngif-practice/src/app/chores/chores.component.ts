import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = [ 'Cook dinner', 'Clean kitchen', 'Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];

   targetImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLTzHxoOAd__wYShPGLAIix14O3LJpi1MYQ&usqp=CAU';

   constructor() { }

   ngOnInit() {
   }

}
