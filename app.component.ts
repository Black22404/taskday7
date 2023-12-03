import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'creationlist';

  customer: any[] = [
    { name: "kuhuk", username: "ygjyg", phone: "31654" }
  ];

  addcustomer() {
    this.customer.push({ name: "new", username: "new", phone: 6566 });
    console.log("test");
  }

  deletecustomer() {
    this.customer.pop();
    console.log("test");
  }

  viewCustomerDetails(customer: any): void {
    // You can customize this based on how you want to display the details (e.g., alert, modal, etc.)
    alert(`User: ${customer.username}, Phone: ${customer.phone}`);
  }

  deleteCustomer(customer: any): void {
    // Your delete logic here
  }

  // Function to update a customer
  updateCustomer(customer: any): void {
    // Your update logic here
  }
}
