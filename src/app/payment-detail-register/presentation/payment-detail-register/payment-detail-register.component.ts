import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentDetail } from 'src/app/core/domain/model/payment-detail';
import { PaymentDetailRegisterViewModel } from './payment-detail-register-view-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from 'src/app/core/presentation/delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-payment-detail-register',
  templateUrl: './payment-detail-register.component.html',
  styleUrls: ['./payment-detail-register.component.css'],
})
export class PaymentDetailRegisterComponent implements OnInit, AfterViewInit {
  constructor(
    private viewModel: PaymentDetailRegisterViewModel,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  displayedColumns: string[] = [
    'Card Owner',
    'Card Number',
    'Exp. Date',
    'action',
  ];
  paymentDetailData: PaymentDetail[] = [];
  isDataSuccessLoaded: boolean = false;
  selectedPayment: PaymentDetail = {} as PaymentDetail;
  isUpdateMode: boolean = false;
  isSubmitted: boolean = false;
  dataSource = new MatTableDataSource<PaymentDetail>(this.paymentDetailData);
  @ViewChild('scheduledOrdersPaginator') set paginator(pager: MatPaginator) {
    if (pager) this.dataSource.paginator = pager;
  }
  @ViewChild(MatSort) set sort(sorter: MatSort) {
    if (sorter) this.dataSource.sort = sorter;
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }

  inputPaymentData = new FormGroup({
    cardOwnerName: new FormControl('', [Validators.required]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]),
    expirationDate: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9+#/-]*$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]),
  });

  ngOnInit(): void {
    this.getPaymentDetails();
  }

  get cardOwnerName() {
    return this.inputPaymentData.get('cardOwnerName');
  }

  get cardNumber() {
    return this.inputPaymentData.get('cardNumber');
  }

  get expirationDate() {
    return this.inputPaymentData.get('expirationDate');
  }

  get securityCode() {
    return this.inputPaymentData.get('securityCode');
  }

  get updatedData() {
    return {
      ...this.inputPaymentData.value,
    };
  }

  get isAbleSubmit() {
    return this.inputPaymentData.invalid;
  }

  private getPaymentDetails() {
    this.viewModel.getPaymentDetails().subscribe((res) => {
      if (res) {
        this.paymentDetailData = res.data;
        this.dataSource.data = this.paymentDetailData;
        this.dataSource.sort = this.sort;
        this.isDataSuccessLoaded = res.status;
      }
    });
  }

  addPaymentDetail() {
    this.isDataSuccessLoaded = false;
    this.isSubmitted = true;
    const insertedPayment = {
      ...this.inputPaymentData.value,
      paymentDetailId: this.selectedPayment.paymentDetailId,
    };
    this.viewModel.createPaymentDetail(insertedPayment).subscribe((res) => {
      if (res) {
        this.isDataSuccessLoaded = true;
        this.isSubmitted = false;
        this.getPaymentDetails();
        this.inputPaymentData.reset();
        this.resetPaymentDetailInput();
        this.openSnackBar('New data has been added successfully', 'close');
      }
    });
  }

  updatePaymentDetail() {
    this.isDataSuccessLoaded = false;
    this.isSubmitted = true;
    const updatedPayment = {
      ...this.inputPaymentData.value,
      paymentDetailId: this.selectedPayment.paymentDetailId,
    };
    this.viewModel.updatePaymentDetail(updatedPayment).subscribe((res) => {
      if (res == null) {
        this.isDataSuccessLoaded = true;
        this.isSubmitted = false;
        this.getPaymentDetails();
        this.inputPaymentData.reset();
        this.resetPaymentDetailInput();
        this.openSnackBar('New data has been updated successfully', 'close');
      }
    });
  }

  deletePaymentDetail(id: any) {
    this.isDataSuccessLoaded = false;
    this.viewModel.deletePaymentDetail(id).subscribe((res) => {
      if (res) {
        this.isDataSuccessLoaded = true;
        this.getPaymentDetails();
        this.inputPaymentData.reset();
        this.resetPaymentDetailInput();
        this.openSnackBar('Data has been deleted successfully', 'close');
      }
    });
  }

  onExpDateInputChange(text: string) {
    this.selectedPayment.expirationDate = text;
    if (text && text.length == 2) {
      this.selectedPayment.expirationDate += '/';
    }
  }

  onEditPaymentDetail(paymentDetail: PaymentDetail) {
    this.selectedPayment = paymentDetail;
    this.isUpdateMode = true;
  }

  onClickButtonCancel() {
    this.resetPaymentDetailInput();
    this.isUpdateMode = false;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  resetPaymentDetailInput() {
    this.selectedPayment = {} as PaymentDetail;
    Object.keys(this.inputPaymentData.controls).forEach((key) => {
      this.inputPaymentData.controls[key].setErrors(null);
    });
    this.isUpdateMode = false;
  }

  openDeleteEmployeeDialog(paymentDetail: any) {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      data: {
        paymentDetail: paymentDetail,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.deletePaymentDetail(paymentDetail.paymentDetailId);
      }
    });
  }
}
