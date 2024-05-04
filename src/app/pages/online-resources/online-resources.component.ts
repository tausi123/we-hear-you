import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AsyncPipe, NgClass, NgForOf } from "@angular/common";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-online-resources-page",
  templateUrl: "./online-resources.component.html",
  styleUrls: [ "./online-resources.component.css" ],
  imports: [ NgClass, AsyncPipe, NgForOf ],
  standalone: true,
})
export default class OnlineResourcesComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

}
