import { Component, OnInit, ViewContainerRef, Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { LoginClass } from './login-class';
import { CookieService } from 'ngx-cookie-service';
import { ToastrManager  } from 'ng6-toastr-notifications';
import { UserService } from '../shared/services/user.service';
import { SharedDataService } from '../shared/services/shared.service';
import { EncrDecrService } from '../shared/services/encr-decr.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  login: LoginClass = new LoginClass();
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private cookie: CookieService, public toastr: ToastrManager, vcr: ViewContainerRef,
    private userService: UserService, private router: Router, private DataService: SharedDataService, private EncrDecr: EncrDecrService) {
    //this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {    
  }
  
  Checklogin() {
    //console.log(this.login);
	//this.cookie.set('username', this.login.userid);
	//this.cookie.set('logindetails', this.login);
    //this.toastr.successToastr('Login Success', 'Success!');
    this.router.navigateByUrl('/app/home');
    this.storage.clear();
    this.DataService.setLoggedUser(this.login);
    var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', JSON.stringify(this.login));
    this.storage.set('logindetails', encrypted);
    
    //this.userService.login(this.login).subscribe(data => {
    //  if (typeof data === 'undefined') {
    //    this.toastr.errorToastr(
    //      'Some error occured. Please try later...',
    //      'error'
    //    );
    //  } else {
    //    this.login = data;
    //    if (this.login._isfailure) {
    //      let msg: string = String(data._msg);
    //      this.toastr.errorToastr(msg, 'error');
    //    } else {
    //      this.cookie.set('username', JSON.stringify(this.login.userid));
    //      this.cookie.set('logindetails', JSON.stringify(this.login));
    //      this.router.navigateByUrl('/app/home');
    //    }
    //  }
    //});
    //this.router.navigateByUrl("/pages/default");
  }

}
