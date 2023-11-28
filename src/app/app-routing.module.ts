import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloUserComponent } from './hello-user/hello-user.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

const routes: Routes = [
  { path: 'hello-user', component: HelloUserComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'transaction/:id', component: TransactionDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
