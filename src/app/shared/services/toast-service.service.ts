import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastrManager  } from 'ng6-toastr-notifications';

@Injectable()
export class ToastServiceService {

  constructor(public toastr: ToastrManager , vcr: ViewContainerRef) { 
    //this.toastr.setRootViewContainerRef(vcr);
  }

  showSuccess(msg:string) {
    this.toastr.successToastr(msg, 'Success!');
  }

  showError(msg:string) {
    this.toastr.errorToastr(msg, 'Oops!');
  }

  showWarning(msg:string) {
    this.toastr.warningToastr(msg, 'Alert!');
  }

  showInfo(msg:string) {
    this.toastr.infoToastr(msg);
  }

}
