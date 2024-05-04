import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AsyncPipe, NgClass, NgForOf } from "@angular/common";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-contact-me-page",
  templateUrl: "./contact-me.component.html",
  styleUrls: [ "./contact-me.component.css" ],
  imports: [ NgClass, AsyncPipe, NgForOf ],
  standalone: true,
})
export default class ContactMeComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

}
