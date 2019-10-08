import { Component, OnInit, Inject, Injectable} from '@angular/core';
import { LoginClass } from '../../login/login-class';
import { CookieService } from 'ngx-cookie-service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { EncrDecrService } from '../../shared/services/encr-decr.service';


@Component({
  selector: 'app-base-header',
  templateUrl: './base-header.component.html',
  styleUrls: ['./base-header.component.css']
})
export class BaseHeaderComponent implements OnInit {
  notificationcount: number = 0;
  user: LoginClass = new LoginClass();
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService,private cookie: CookieService, private EncrDecr: EncrDecrService,) { 
    //this.user = JSON.parse(this.cookie.get("logindetails"));
    this.user = JSON.parse(this.EncrDecr.get('123456$#@$^@1ERF', this.storage.get('logindetails')));    
  }

  ngOnInit() {

  }

}
