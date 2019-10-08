import { RestStatus } from "../../shared/view-model/rest-status";
export class UsecaseCount extends RestStatus{
    towerName: String;
    count: number;
    constructor() {
        super();
        this.towerName = "";
        this.count = 0;
		 
    }
}
export class UsecaseCountList extends RestStatus {
   public CountList: UsecaseCount[];
    constructor() {
        super();
		this.CountList =[];
    }
}