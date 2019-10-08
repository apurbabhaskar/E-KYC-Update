import { Component, OnInit, ViewContainerRef, ViewChild, Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { EncrDecrService } from '../../shared/services/encr-decr.service';
import { LoginClass } from '../../login/login-class';
import { LandingService } from '../../shared/services/landing.service';
import { UsecaseCount,UsecaseCountList } from '../../pages/landing-page/landing-page-class';
import { ToastrManager } from 'ng6-toastr-notifications';
import { environment } from '../../../environments/environment.prod';
import { SharedDataService } from '../../shared/services/shared.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  AdvClientID: string = "";
  AdvClientName: string = "";
  AdvClientLocation: string = "";
  AdvCaseId: string = "";
  _totalnoofrows: number=10;
  _pagenum:number=1;
  

  pagenumber: number = 1;
  logindet: LoginClass = new LoginClass();
  disablesavebutton: boolean = true;
  private loggeduser = new LoginClass();
  entitylist: any;
  
  
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private cookie: CookieService, private SharedDataService: SharedDataService,
    public toastr: ToastrManager, private EncrDecr: EncrDecrService, private router: Router, private landingpageService : LandingService,
    vcr: ViewContainerRef
  )
  {
    this.loadLoggedUser();
    this.loadEntityList();
  }

  ngOnInit() {
  }

  
  loadLoggedUser() {    
    this.loggeduser = JSON.parse(this.EncrDecr.get('123456$#@$^@1ERF', this.storage.get('logindetails')));
  }

  loadEntityList(){
  //   this.landingpageService.getentitylist().subscribe(data => {
  //    if (data._isfailure) {
  //      this.toastr.errorToastr("Entity Master list data cannot be loaded. Please try after some time.");
  //    } else {
  //      this.entitylist = data;
  //      console.log(this.entitylist);
  //    }
     
  // });
  this.entitylist=[{clientid:123,client_name:"Bango PLC",client_type:"Corporate",client_location:"United Kingdom",
     event_status:"Yes", case_created_by:"Bimalesh", caselist:[{caseid:"101",case_type:"Type-1",case_stage:"Open",business_unit:"FS",case_updated_by:"Holmes",case_updated_date:"1995-08-21",case_created_by:"Bimalesh"},
     {caseid:"101",case_type:"Type-1",case_stage:"Open",business_unit:"FS",case_updated_by:"Holmes",case_updated_date:"1995-08-21",case_created_by:"Bimalesh"},
     {caseid:"101",case_type:"Type-1",case_stage:"Open",business_unit:"FS",case_updated_by:"Holmes",case_updated_date:"1995-08-21",case_created_by:"Bimalesh"}]
    },
    {clientid:456,client_name:"Bango PLC",client_type:"Corporate",client_location:"United Kingdom",
    event_status:"No", case_created_by:"Bimalesh",caselist:[{caseid:"101",case_type:"Type-1",case_stage:"Open",business_unit:"FS",case_updated_by:"Holmes",case_updated_date:"1995-08-21",case_created_by:"Bimalesh"},
    {caseid:"101",case_type:"Type-1",case_stage:"Open",business_unit:"FS",case_updated_by:"Holmes",case_updated_date:"1995-08-21",case_created_by:"Bimalesh"},
    {caseid:"101",case_type:"Type-1",case_stage:"Open",business_unit:"FS",case_updated_by:"Holmes",case_updated_date:"1995-08-21",case_created_by:"Bimalesh"}]
   },
   {clientid:789,client_name:"Bango PLC",client_type:"Corporate",client_location:"United Kingdom",
   event_status:"Yes",case_created_by:"Bimalesh", caselist:[{caseid:"101",case_type:"Type-1",case_stage:"Open",business_unit:"FS",case_updated_by:"Holmes",case_updated_date:"1995-08-21",case_created_by:"Bimalesh"},
   {caseid:"101",case_type:"Type-1",case_stage:"Open",business_unit:"FS",case_updated_by:"Holmes",case_updated_date:"1995-08-21",case_created_by:"Bimalesh"},
   {caseid:"101",case_type:"Type-1",case_stage:"Open",business_unit:"FS",case_updated_by:"Holmes",case_updated_date:"1995-08-21",case_created_by:"Bimalesh"}]
  }]
  console.log(this.entitylist);
}
  CancelAdvSearch() {
    this.AdvCaseId="";
    this.AdvClientID="";
    this.AdvClientName="";
    this.AdvClientLocation="";
    this.loadEntityList();
  }
  RemoveAdvSearch(Str: String) {
    if (Str == 'AdvCaseId')
      this.AdvCaseId = "";
    else if (Str == 'AdvClientID')
      this.AdvClientID = "";
    else if (Str == 'AdvClientName')
      this.AdvClientName = "";
    else if (Str == 'AdvClientLocation')
      this.AdvClientLocation = "";
  }
  
  AdvSearch() {
    
  }

  GetRecordByEntity(Str: String) {
    this.SharedDataService.setTowerStr(Str);
    this.router.navigateByUrl('/app/entity');
  }

  pageChangedTower(event: any) {
    this.pagenumber = event;
  }

}
