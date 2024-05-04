import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AsyncPipe, NgClass, NgForOf } from "@angular/common";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-help-page",
  templateUrl: "./help.component.html",
  styleUrls: [ "./help.component.css" ],
  imports: [ NgClass, AsyncPipe, NgForOf ],
  standalone: true,
})
export default class HelpComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

}
