import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

// Annotation used to declare a module
@NgModule({
  imports: [BrowserModule],
  // Importing the component to use with this module
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
