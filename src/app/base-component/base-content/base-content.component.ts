import { Component, OnInit, ViewContainerRef, ViewChild  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-base-content',
  templateUrl: './base-content.component.html',
  styleUrls: ['./base-content.component.css']
})
export class BaseContentComponent implements OnInit {
  UseCaseSearchStr: String = "";
  constructor(public toastr: ToastrManager,private router: Router) { }

  ngOnInit() {
  }


}
