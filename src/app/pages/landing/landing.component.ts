import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AsyncPipe, NgClass, NgForOf } from "@angular/common";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing.component.html",
  styleUrls: [ "./landing.component.css" ],
  imports: [
    NgClass,
    AsyncPipe,
    NgForOf
  ],
  standalone: true,
})
export default class LandingComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

}
