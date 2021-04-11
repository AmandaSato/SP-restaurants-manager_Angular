import { RoomDetailsComponent } from 'src/app/room-details/room-details.component';
import { Observable } from "rxjs";
import { RestaurantService } from "../restaurant.service";
import { Restaurant } from "../restaurant";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-room-list",
  templateUrl: "./room-list.component.html",
  styleUrls: ["./room-list.component.css"]
})
export class RoomListComponent implements OnInit {
  restaurants: Observable<Restaurant[]>;

  constructor(private restaurantService: RestaurantService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.restaurants = this.restaurantService.getRestaurantsList();
  }

  deleteRestaurant(id: number) {
    this.restaurantService.deleteRestaurant(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  restaurantDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateRestaurant(id: number){
    this.router.navigate(['update', id]);
  }
}
