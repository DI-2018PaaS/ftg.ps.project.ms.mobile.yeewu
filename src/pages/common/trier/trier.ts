import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Values } from '../../../providers/common/values';

@Component({
  selector: 'page-trier',
  templateUrl: 'trier.html'
})
export class TrierPage {

  constructor(public navCtrl: NavController,  params: NavParams,public values: Values) {
    this.values.filter = params.data;
  }
  dismiss() {
    this.values.applyFilter = false;
    this.navCtrl.pop();
}
applySort() {
    this.values.applyFilter = true;
    if (!this.values.filter.on_sale) {
        this.values.filter.on_sale = undefined;
    }
    if (!this.values.filter.in_stock) {
        this.values.filter.in_stock = undefined;
    }
    if (this.values.sortType == 0) {
        this.values.filter.order = "asc";
        this.values.filter.orderby = "date";
    } else if (this.values.sortType == 1) {
        this.values.filter.order = "asc";
        this.values.filter.orderby = "title";
    } else if (this.values.sortType == 2) {
        this.values.filter.order = "desc";
        this.values.filter.orderby = "title";
    }
    this.navCtrl.pop();
}
}
