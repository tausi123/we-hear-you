import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AsyncPipe, NgClass, NgForOf } from "@angular/common";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-contact-us-page",
  templateUrl: "./contact-us.component.html",
  styleUrls: [ "./contact-us.component.css" ],
  imports: [ NgClass, AsyncPipe, NgForOf ],
  standalone: true,
})
export default class ContactusComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

}
