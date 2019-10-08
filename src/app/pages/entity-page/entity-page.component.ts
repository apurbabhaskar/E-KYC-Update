import { Component, OnInit, ViewContainerRef, ViewChild, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { EncrDecrService } from '../../shared/services/encr-decr.service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

import { LoginClass } from '../../login/login-class';
import { ToastrManager } from 'ng6-toastr-notifications';
import { environment } from '../../../environments/environment.prod';
import { SharedDataService } from '../../shared/services/shared.service'



@Component({
  selector: 'app-entity-page',
  templateUrl: './entity-page.component.html',
  styleUrls: ['./entity-page.component.css']
})
export class EntityPageComponent implements OnInit {
  pagenumber: number = 1;
  logindet: LoginClass = new LoginClass();
  private loggeduser = new LoginClass();
  partieslist : any;
  doclist:any;
  caselist:any;
  historylist:any;
  _totalnoofrows: number=10;
  _pagenum:number=1;

  fileData = null;
  

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService, private cookie: CookieService,
    public toastr: ToastrManager, private EncrDecr: EncrDecrService, private http: HttpClient,
    vcr: ViewContainerRef
  )
  {
    //this.loadPartiesData();
  }

  ngOnInit() {
    this.loggeduser = JSON.parse(this.EncrDecr.get('123456$#@$^@1ERF', this.storage.get('logindetails')));
  }

 
  
  loadPartiesData() {
    this.partieslist=[{Id:3288,legal_name:"Hellenic Bank Investments",relationship:"Parent Account",
    related_to:"Iris Bohnet",ownership:"45%", updated_by:"Go Sullvan",updated_date:"1995-08-21"},
    {Id:3288,legal_name:"Hellenic Bank Investments",relationship:"Parent Account",
    related_to:"Iris Bohnet",ownership:"45%", updated_by:"Go Sullvan",updated_date:"1995-08-21"},
    {Id:3288,legal_name:"Hellenic Bank Investments",relationship:"Parent Account",
    related_to:"Iris Bohnet",ownership:"45%", updated_by:"Go Sullvan",updated_date:"1995-08-21"},
    {Id:3288,legal_name:"Hellenic Bank Investments",relationship:"Parent Account",
    related_to:"Iris Bohnet",ownership:"45%", updated_by:"Go Sullvan",updated_date:"1995-08-21"},
    {Id:3288,legal_name:"Hellenic Bank Investments",relationship:"Parent Account",
    related_to:"Iris Bohnet",ownership:"45%", updated_by:"Go Sullvan",updated_date:"1995-08-21"}]

  //console.log(this.partieslist);
  }

  loadDocumentData() {
    this.doclist=[{
    Id:3288,name:"COI",source:"Uploaded Document", category:"Financial",
    type:"Certificate of Incorpo", status:"Received",connection_point:"2939",updated_date:"1995-08-21"},
    {Id:3288,name:"COI",source:"Uploaded Document", category:"Financial",
    type:"Certificate of Incorpo", status:"Received",connection_point:"2939",updated_date:"1995-08-21"},
    {Id:3288,name:"COI",source:"Uploaded Document", category:"Financial",
    type:"Certificate of Incorpo", status:"Received",connection_point:"2939",updated_date:"1995-08-21"},
    {Id:3288,name:"COI",source:"Uploaded Document", category:"Financial",
    type:"Certificate of Incorpo", status:"Received",connection_point:"2939",updated_date:"1995-08-21"},
    {Id:3288,name:"COI",source:"Uploaded Document", category:"Financial",
    type:"Certificate of Incorpo", status:"Received",connection_point:"2939",updated_date:"1995-08-21"},
    {Id:3288,name:"COI",source:"Uploaded Document", category:"Financial",
    type:"Certificate of Incorpo", status:"Received",connection_point:"2939",updated_date:"1995-08-21"}
  ]

  //console.log(this.doclist);
  }

  loadCaseData() {
    this.caselist=[
    {case_name:"Remedetion",arequired_stage:"Further Data Maagement",activity_name:"Holmes",
    task_name:"Holmes", assigned_team:"RBS Commercial",assigned_user:"Iris Bohnet",due_date:"1995-08-21",
    task_duration:"2hr 30min",status:"In Progress",requestor:"Workflow"},
    {case_name:"Remedetion",arequired_stage:"Further Data Maagement",activity_name:"Holmes",
    task_name:"Holmes", assigned_team:"RBS Commercial",assigned_user:"Iris Bohnet",due_date:"1995-08-21",
    task_duration:"2hr 30min",status:"In Progress",requestor:"Workflow"},
    {case_name:"Remedetion",arequired_stage:"Further Data Maagement",activity_name:"Holmes",
    task_name:"Holmes", assigned_team:"RBS Commercial",assigned_user:"Iris Bohnet",due_date:"1995-08-21",
    task_duration:"2hr 30min",status:"In Progress",requestor:"Workflow"},
    {case_name:"Remedetion",arequired_stage:"Further Data Maagement",activity_name:"Holmes",
    task_name:"Holmes", assigned_team:"RBS Commercial",assigned_user:"Iris Bohnet",due_date:"1995-08-21",
    task_duration:"2hr 30min",status:"In Progress",requestor:"Workflow"},
    {case_name:"Remedetion",arequired_stage:"Further Data Maagement",activity_name:"Holmes",
    task_name:"Holmes", assigned_team:"RBS Commercial",assigned_user:"Iris Bohnet",due_date:"1995-08-21",
    task_duration:"2hr 30min",status:"In Progress",requestor:"Workflow"},
    {case_name:"Remedetion",arequired_stage:"Further Data Maagement",activity_name:"Holmes",
    task_name:"Holmes", assigned_team:"RBS Commercial",assigned_user:"Iris Bohnet",due_date:"1995-08-21",
    task_duration:"2hr 30min",status:"In Progress",requestor:"Workflow"},
    {case_name:"Remedetion",arequired_stage:"Further Data Maagement",activity_name:"Holmes",
    task_name:"Holmes", assigned_team:"RBS Commercial",assigned_user:"Iris Bohnet",due_date:"1995-08-21",
    task_duration:"2hr 30min",status:"In Progress",requestor:"Workflow"},
    {case_name:"Remedetion",arequired_stage:"Further Data Maagement",activity_name:"Holmes",
    task_name:"Holmes", assigned_team:"RBS Commercial",assigned_user:"Iris Bohnet",due_date:"1995-08-21",
    task_duration:"2hr 30min",status:"In Progress",requestor:"Workflow"},
  ]

  //console.log(this.caselist);
  }

  loadHistoryData() {
    this.historylist=[
    {history_data:"22-Aug-2019 11:39 AM, Case 101 has been put on hold by Approving Authority."},
    {history_data:"21-Aug-2019 08:39 PM, Case 101 was auto submitted"},
    {history_data:"21-Aug-2019 12:39 AM, Case 101 was under review by system"},
    {history_data:"20-Aug-2019 09:00 PM, Case 101 was modified by manoj"},
    {history_data:"20-Aug-2019 03:00 PM, Case 101 was created by Bimalesh"},
  ]

  //console.log(this.caselist);
  }

  EditPanel(Str: String) {
    
  }
  CancelEdit(Str: String) {
    
  }

  pageChanged(event: any) {
    this.pagenumber = event;
    this.loadPartiesData();
  }


  

 

}
