import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
  private transactionsUrl = 'assets/transactions.json';

  constructor(
    private http: HttpClient,
  ) { }

  getTransactions(): Observable<any> {
    return this.http.get<any>(this.transactionsUrl);
  }

  getTransactionById(transactionId: string): Observable<any> {
    return this.http.get<any[]>(this.transactionsUrl).pipe(
      map(transactions => transactions.find(transaction => transaction.id === transactionId))
    );
  }
}
