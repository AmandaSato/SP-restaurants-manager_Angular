import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  restaurant: Restaurant = new Restaurant();
  submitted = false;

  constructor(private restaurantService: RestaurantService,
    private router: Router) { }

  ngOnInit() {
  }

  newRestaurant(): void {
    this.submitted = false;
    this.restaurant = new Restaurant();
  }

  save() {
    this.restaurantService.createRestaurant(this.restaurant)
      .subscribe(data => console.log(data), error => console.log(error));
    this.restaurant = new Restaurant();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/restaurants']);
  }
}
