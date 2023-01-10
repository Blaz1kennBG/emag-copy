import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { switchMap } from 'rxjs';
import { ProductService } from 'src/app/_services/products.service';
import { SwiperModule } from 'swiper/angular';
import { SwiperOptions } from 'swiper/types/swiper-options';
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';

// install Swiper modules
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss'],
  standalone: true,
  providers: [StarRatingConfigService],
  imports: [IonicModule, CommonModule, SwiperModule, StarRatingModule],
})
export class ListDetailsComponent implements OnInit {
  swiperConfig: SwiperOptions = {
    pagination: {
      clickable: true,
    },
  };
  product$ = this.route.params.pipe(
    switchMap((params: Params) => this.productSrv.getById(params['productId']))
  );
  constructor(
    private route: ActivatedRoute,
    private productSrv: ProductService
  ) {}

  ngOnInit() {}
}
