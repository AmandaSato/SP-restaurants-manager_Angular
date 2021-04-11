import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  id: number;
  restaurant: Restaurant;
  submitted = false;


  constructor(private route: ActivatedRoute,private router: Router,
    private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurant = new Restaurant();

    this.id = this.route.snapshot.params['id'];
    
    this.restaurantService.getRestaurant(this.id)
      .subscribe(data => {
        console.log(data)
        this.restaurant = data;
      }, error => console.log(error));
  }

  updateRestaurant() {
    this.restaurantService.updateRestaurant(this.id, this.restaurant)
      .subscribe(data => console.log(data), error => console.log(error));
    this.restaurant = new Restaurant();
    this.gotoList();
  }

  onSubmit() {
    this.updateRestaurant();    
  }

  gotoList() {
    this.router.navigate(['/restaurants']);
  }
}
