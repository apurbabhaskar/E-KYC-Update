import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { LoginClass } from '../../login/login-class';

@Injectable({ providedIn: 'root', })
export class SharedDataService {

  constructor() { }

  private loggeduser = new LoginClass();
  private SearchStr: String = "";

  setLoggedUser(user:LoginClass) {
    this.loggeduser = user;
  }
  getLoggedUser(){
    return this.loggeduser;
  }

  setTowerStr(Str: String) {
    this.SearchStr = Str;
  }
  getTowerStr() {
    return this.SearchStr;
  }
}
