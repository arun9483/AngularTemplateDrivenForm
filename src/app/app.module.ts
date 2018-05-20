import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { minLengthValidatorDirective } from "./app.minLengthValidator.directive";

@NgModule({
  declarations: [AppComponent, minLengthValidatorDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
