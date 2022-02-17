import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1351,w_2400,x_0,y_1049/f_auto,q_auto,w_1100/v1618241852/shape/mentalfloss/94532-gettyimages-1199037273.jpg';
  image2 = 'https://i.natgeofe.com/n/57f411cd-dfe6-41a6-8d40-21ba583eccfb/lake-elsinore-california.jpg';
  image3 = 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2013/03/butterfly_gardens_20090219_085.jpg?w=600&ssl=1';

  constructor() { }

  ngOnInit() {
  }

}