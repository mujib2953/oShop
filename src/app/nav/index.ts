/*
 * @Author: Mujib Ansari 
 * @Date: 2018-07-16 14:07:11 
 * @Last Modified by: Mujib Ansari
 * @Last Modified time: 2018-07-19 18:17:41
 */
import { Routes } from '@angular/router';

// --- guards
import { AuthGaurdService } from '../services/auth-gaurd.service';

import { CheckOutComponent } from '../pages/check-out/check-out.component';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { MyOrdersComponent } from '../pages/my-orders/my-orders.component';
import { OrderSuccessComponent } from '../pages/order-success/order-success.component';
import { ProductsComponent } from '../pages/products/products.component';
import { ShopingCartComponent } from '../pages/shoping-cart/shoping-cart.component';

// --- admins
import { AdminProductsComponent } from '../pages/admin-products/admin-products.component';
import { AdminOrdersComponent } from '../pages/admin-orders/admin-orders.component';
import { AdminProductFormComponent } from '../pages/admin-product-form/admin-product-form.component';

import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { AdminAuthGaurdService } from '../services/admin-auth-gaurd.service';


export const appPaths: Routes = [
    { path: '', component: HomeComponent },
    
    { path: 'login', component: LoginComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'shoping-cart', component: ShopingCartComponent },

    { path: 'check-out', component: CheckOutComponent, canActivate: [ AuthGaurdService ] },
    { path: 'my/orders', component: MyOrdersComponent, canActivate: [ AuthGaurdService ] },
    { path: 'order-success', component: OrderSuccessComponent, canActivate: [ AuthGaurdService ] },
    

    
    { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [ AuthGaurdService, AdminAuthGaurdService ] },
    { path: 'admin/products/new', component: AdminProductFormComponent, canActivate: [ AuthGaurdService, AdminAuthGaurdService ] },
    { path: 'admin/products/:id', component: AdminProductFormComponent, canActivate: [ AuthGaurdService, AdminAuthGaurdService ] },
    { path: 'admin/products', component: AdminProductsComponent, canActivate: [ AuthGaurdService, AdminAuthGaurdService ] },


    { path: '**', component: PageNotFoundComponent }
];

