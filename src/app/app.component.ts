import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerces-GTech';

  faShoppingCart = faShoppingCart;
  faSearch = faSearch;

}
