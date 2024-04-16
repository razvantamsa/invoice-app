export interface Invoice {
  id: string;
  vendor_name: string;
  due_date: string;
  description: string | undefined;
  amount: number;
  paid: boolean;
}
