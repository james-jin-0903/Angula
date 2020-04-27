import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

import { AppRoutingModule } from "./router/router";

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CaroselComponent } from './components/carosel/carosel.component';
import { StoreComponent } from './components/store/store.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { RemoveSomeWordPipe } from './pipes/remove-some-word.pipe';
import { ProductInfoComponent } from './components/product-info/product-info.component';

import { ByProductService } from './components/buy-product-service';
import { LoggingService } from './components/logging-service';
import { ProductListService } from './components/product-list-service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    CaroselComponent,
    StoreComponent,
    ProfileComponent,
    AboutComponent,
    NewsComponent,
    HomeComponent,
    RemoveSomeWordPipe,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClient
  ],
  providers: [ByProductService,LoggingService,ProductListService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
