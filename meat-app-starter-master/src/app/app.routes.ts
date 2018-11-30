import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantDetailComponent } from "./restaurants/restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "./restaurants/restaurant-detail/menu/menu.component";
import { ReviewsComponent } from "./restaurants/restaurant-detail/reviews/reviews.component";
import { OrderSummaryComponent } from "./order/order-summary/order-summary.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'}, //lazyModule
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'}, //Após 'restaurants/:id' se não digitar nada, é redirecionado para menu
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
    ]},
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: 'order', loadChildren: './order/order.module#OrderModule'}, //LazyModule
    {path: '**', component: NotFoundComponent} //rota de wildcard página não encontrada
]