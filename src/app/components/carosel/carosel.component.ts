import { Component,OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";

import {fadeIn, fadeOut, jackIn, jackOut} from "../../animations/slider";
@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(fadeIn,{params: {time: "1200ms"}})]),
      transition('* => void', [useAnimation(fadeOut,{params: {time: "1200ms"}})])
    ]),
    trigger('textAnimation', [
      transition('void => *', [useAnimation(jackIn,{params: {time: "1200ms"}})]),
      transition('* => void', [useAnimation(jackOut,{params: {time: "1200ms"}})])
    ])
  ]
})

export class CaroselComponent {
  caroselItems = [
    {url: "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",title: "Most Popular Goods!",subtitle: "from many famouse companies"},
    {url: "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",title: "Where ever you are located...",subtitle: "World wide service"},
    {url: "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",title: "Where do you wanna transfer?",subtitle: "transfer to every where in time"},
    {url: "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg",title: "We are ready anytime!",subtitle: "service all day with top service"}
  ];

  currentImg = 0;

  before() {
    if( 0 === this.currentImg ) {
      this.currentImg = this.caroselItems.length - 1;
    } else {
      this.currentImg--;
    }
  }

  next() {
    if((this.caroselItems.length - 1) === this.currentImg ) {
      this.currentImg = 0;
    } else {
      this.currentImg++;
    }
  }

}
