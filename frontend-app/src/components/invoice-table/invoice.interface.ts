export interface Invoice {
  id: number;
  vendor_name: string;
  due_date: string;
  description: string;
  amount: number;
  paid: boolean;
}
