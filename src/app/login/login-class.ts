import { RestStatus } from "../shared/view-model/rest-status";

export class LoginClass extends RestStatus {
    userid: String;
    password: String;
    Role: String;
    TowerId: String;
    isActive: boolean ;
	domain: String;
	
    constructor() {
        super();
        this.userid = "";
        this.password = "";
        this.Role = "";
        this.TowerId = "";		
        this.isActive = true;
		this.domain="Wipro";
		
    }
}

