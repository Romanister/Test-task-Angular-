import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from './data/data.json';

export interface Transaction {
  total: number;
  data: TransactionData[];
}
export interface TransactionData {
  _id: string;
  amount: string;
  type: string;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  transactions: TransactionData[] = [];
  constructor(private router: ActivatedRoute) {
    this.router.queryParams.subscribe((params) => {
      if (this.transactions.length !== 0) {
        this.transactions.length = 0;
      }
      if (params['tab'] == 0) {
        this.transactions = data[0].data.filter((i) => i.type === 'income');
      }
      if (params['tab'] == 1) {
        this.transactions = data[0].data.filter((i) => i.type === 'outcome');
      }
      if (params['tab'] == 2) {
        this.transactions = data[0].data.filter((i) => i.type === 'loan');
      }
      if (params['tab'] == 3) {
        this.transactions = data[0].data.filter((i) => i.type === 'investment');
      }
    });
  }

  Random = () => {
    let min = Math.ceil(1);
    let max = Math.floor(101);
    return Math.floor(Math.random() * (max - min)) + min;
  };
}
