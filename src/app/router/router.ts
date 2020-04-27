import { NgModule } from "@angular/core";

import {Routes, RouterModule} from "@angular/router";

import { StoreComponent } from '../components/store/store.component';
import { AboutComponent } from '../components/about/about.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { NewsComponent } from '../components/news/news.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductInfoComponent } from '../components/product-info/product-info.component';

const appRoutes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "store", component: StoreComponent},
    {path: "store/:productName", component: ProductInfoComponent},
    {path: "about", component: AboutComponent},
    {path: "profile", component: ProfileComponent},
    {path: "news", component: NewsComponent}
];

@NgModule ({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
