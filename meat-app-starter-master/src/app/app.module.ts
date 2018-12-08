import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurants/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurants/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurants/restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurants/restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent } from './security/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //CoreModule, //O providers foram colocados arqui, providers é singleton | ficou obsoleto pq é importado em SharedModule.forRoot()
    SharedModule.forRoot(),//forRoot trás os providers ficando global os providers //Modulos compartilhados, foi retirado modulos, estes etão dentro deste modulo, puxado pelo modulo raiz, sendo usado por outros modulos tbm
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules /* Carrega os modulos lazy em background*/}) //configurando Rotas
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, // coloca # fazendo com q a url após seja processada no cliente, em servers http em produção. Procure na doumentação do angula para configurar o servidor (apache tomcat etc) para não precisar
    /* Foi criado em CORE, e importado estes providers tudo junto, deixando código mais limpo - RestaurantsService, ShoppingcartService, OrderService,*/ 
    {provide: LOCALE_ID, useValue: 'pt-BR'}],
     //modulo raiz - fica disponivel (injetado) pra toda app componente e servicos, todos compartolham a mesma intacia deste, como singletons
  bootstrap: [AppComponent]
})
export class AppModule { }
