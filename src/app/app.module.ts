import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

// --- all routes in App
import { appPaths } from './nav';

// --- all components
import { HomeComponent } from './pages/home/home.component';
import { ShopingCartComponent } from './pages/shoping-cart/shoping-cart.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsComponent } from './pages/products/products.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { AdminOrdersComponent } from './pages/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { AdminProductFormComponent } from './pages/admin-product-form/admin-product-form.component'; 

// --- all services
import { SessionService } from './services/session.service';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { UserService } from './services/user.service';
import { AdminAuthGaurdService } from './services/admin-auth-gaurd.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopingCartComponent,
    PageNotFoundComponent,
    NavBarComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    MyOrdersComponent,
    AdminProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      appPaths,
      // { enableTracing: true }
    ),
    NgbModule.forRoot()
  ],
  providers: [
    SessionService,
    AuthGaurdService,
    AdminAuthGaurdService,
    UserService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
