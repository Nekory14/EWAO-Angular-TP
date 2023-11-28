import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: any[] = [];
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'amount', 'balance', 'label', 'date'];

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(private transactionService: TransactionService, private router: Router) {
    this.dataSource = new MatTableDataSource(this.transactions);
  }

  navigateToDetails(transactionId: string) {
    this.router.navigate(['/transaction', transactionId]);
  }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
      this.dataSource.data = this.transactions;
      this.dataSource.sort = this.sort;
    });
  }
}