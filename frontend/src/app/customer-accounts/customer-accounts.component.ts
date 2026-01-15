import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../services/customer.service';
import { catchError, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css'],
})
export class CustomerAccountsComponent implements OnInit {
  customerId!: number;
  customer!: Customer;
  accounts$!: Observable<Array<any>>;
  errorMessage!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
  ) {
    this.customer = this.router.getCurrentNavigation()?.extras
      .state as Customer;
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
    this.accounts$ = this.customerService.getCustomerAccounts(this.customerId).pipe(
      catchError((err) => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }
}
