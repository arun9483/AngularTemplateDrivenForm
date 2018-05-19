import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public name: string;
  public contactNumber: number;
  public email: string;

  reset() {
    this.name = "";
    this.contactNumber = null;
    this.email = "";
  }

  submit() {
    const formData = {
      name: this.name,
      contactNumber: this.contactNumber,
      email: this.email
    };
    console.log(formData);
  }
}
