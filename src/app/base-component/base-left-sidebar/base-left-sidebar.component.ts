import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { LoginClass } from '../../login/login-class';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { EncrDecrService } from '../../shared/services/encr-decr.service';

@Component({
  selector: 'app-base-left-sidebar',
  templateUrl: './base-left-sidebar.component.html',
  styleUrls: ['./base-left-sidebar.component.css']
})
export class BaseLeftSidebarComponent implements OnInit {
  user: LoginClass = new LoginClass();
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private EncrDecr: EncrDecrService) {
    this.user = JSON.parse(this.EncrDecr.get('123456$#@$^@1ERF', this.storage.get('logindetails'))); 
  }

  ngOnInit() {
  }

}
