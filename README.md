# MyStoreProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Comments
This projects consists of 3 main components {header, products, cart}:
  -- Header is responsible for rendering the nav bar to the user to enable navigation between "ProductList" view and "Cart" view.

  -- Products is responsible for rendering a list of products for the user to add to their carts and their prices.
  Note that: In this app, the user can click on add to cart several times to add more items (increase the quantity).

  -- Cart is responsible for rendering the list of cart items that the user has chosen and to view the final sum.


  This project consists of 2 services {api ,cart}:
   --  api has the http get request to reneder products from fake api store.

   -- cart has all the functions required for the cart view inlcuding (add to cart, remove item from cart, emptycart).
   I acknowledge using this video for expalnation:
   https://www.youtube.com/watch?v=855KrFfF9-w

