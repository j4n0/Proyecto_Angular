import { Component } from '@angular/core';
import { ROUTES, RouterModule, Routes } from "@angular/router";
import {
    AboutComponent,
    HomeComponent,
    ProductComponent
} from "./components/Index.paginas";


const app_routes: Routes = [

    { path: 'home', component:HomeComponent},
    { path: 'about', component:AboutComponent},
    { path: 'product', component:ProductComponent},
    { path:'**', pathMatch:'full', redirectTo:'home'}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
