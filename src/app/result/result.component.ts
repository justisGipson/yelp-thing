import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent{
  public _result = {};
  // constructor() { }

  @Input() set result(result: any){
    this._result = result;
  }
  get result(): any {
    return this._result;
  }
}
