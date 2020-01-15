import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  filter : string = "";

  onChangeFilter(newFilter: string) {
    this.filter = newFilter;

  }
}
