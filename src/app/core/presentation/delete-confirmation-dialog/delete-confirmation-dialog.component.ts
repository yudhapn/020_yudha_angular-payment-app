import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentDetail } from '../../domain/model/payment-detail';

export interface PaymentDetailData {
  paymentDetail: PaymentDetail;
}

@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.css'],
})
export class DeleteConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PaymentDetailData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  get deletedData() {
    return this.data.paymentDetail.paymentDetailId;
  }
}
