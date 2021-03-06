import { Component, OnInit } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';

import { MatTableModule, MatTableDataSource } from '@angular/material/table';

import { OrderStatusReport } from '../orders';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home', // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [Title],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: ['./home.component.css'],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  /**
   * Set our default values
   */
  public localState = { value: '' };

  public displayedColumns = [
    'time',
    'orderId',
    'version',
    'orderStatus',
    'price',
    'quantity',
    'side',
    'orderType',
    'tif',
    'computationalLatency',
    'lastQuantity',
    'lastPrice',
    'leavesQuantity',
    'cumQuantity',
    'averagePrice',
    'liquidity',
    'rejectMessage',
    'cancel'
  ];

  public dataSource = new MatTableDataSource(ORDER_DATA);

  /**
   * TypeScript public modifiers
   */
  constructor(public appState: AppState, public title: Title) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}

const ORDER_DATA: OrderStatusReport[] = [
  {
    time: Date.now(),
    orderId: '41YXDqWn',
    version: '1',
    orderStatus: 'Working',
    price: 226.99,
    quantity: 0.01,
    side: 'Bid',
    type: 'limit',
    timeInForce: 'GTC',
    computationalLatency: 2,
    lastQuantity: 0.01,
    lastPrice: 226.97,
    leavesQuantity: 0,
    cumQuantity: 0,
    averagePrice: 226.97,
    liquidity: '',
    rejectMessage: ''
  }
];
