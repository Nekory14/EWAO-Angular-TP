import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent {
  transaction: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService
  ) {}

  ngOnInit(){
    this.route.params.subscribe(params => {
      const transactionId = params['id'];
      this.transactionService.getTransactionById(transactionId).subscribe(data => {
        this.transaction = data;
      })
    })
  }

  back(){
    this.router.navigate(['/transactions']);
  }
}
