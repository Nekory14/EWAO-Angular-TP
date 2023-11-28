import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloUserComponent } from './hello-user/hello-user.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionService } from './transaction.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { DateTimeService } from './date-time.service';



@NgModule({
  declarations: [
    AppComponent,
    HelloUserComponent,
    CalculatorComponent,
    TransactionsComponent,
    TransactionDetailComponent,
    CommonHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [TransactionService, DateTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }