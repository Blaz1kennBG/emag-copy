import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { fadeInDownBigOnEnterAnimation } from 'angular-animations';
import { StarRatingModule, StarRatingConfigService } from 'angular-star-rating';

import { tap } from 'rxjs';
import { ProductService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    StarRatingModule,
  ],
  providers: [StarRatingConfigService],
  animations: [
    fadeInDownBigOnEnterAnimation({
      anchor: 'enter',
      duration: 700,
      translate: '50px',
    }),
  ],
})
export class ListPage implements OnInit {
  products$ = this.productsSrv
    .getAll()
    .pipe(tap((p) => console.log('[PRODUCTS] ', p)));
  constructor(
    private productsSrv: ProductService,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}
}
