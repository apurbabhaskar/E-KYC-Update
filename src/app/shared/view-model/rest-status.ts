export class RestStatus {
    public _msg: String;
    public _isfailure: boolean;
    public UserName: String;
}

export class BaseClass extends RestStatus{
    public IsEditMode: boolean;    
    public SearchString: String;
    public _recordperpage: number;
    public _totalnoofrows: number;
  public _pagenum: number;
  public UserName: String;

    constructor(){
        super();
        this.IsEditMode = false;
        this.SearchString="";
        this._recordperpage=10;
        this._totalnoofrows=0;
      this._pagenum = 1;
      this.UserName = "";
    }
}
