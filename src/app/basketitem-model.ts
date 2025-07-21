export class PaymentItem {
  id!: string;
  pay_method: string = 'visa';
  full_name!: string;
  expire_date!: string;
  card_number!: number;
  ccv!: number;
  address!: string;
}
