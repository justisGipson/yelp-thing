import { Component } from '@angular/core';
import { Result } from '../models/result.model';
import { Search } from '../models/search.model';
import { YelpService } from '../yelp.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  result: Result[];
  search: Search[];

  constructor(private service: YelpService) {}
  onSearch(price: number, location: string): void{    
    let searchStuff = new Search();
    searchStuff.price = price;
    searchStuff.location = location;

    this.service.findFood(searchStuff).subscribe(data => {
      this.result = data.response;
      // console.log(this.result)
    })
  }
}