import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  numberList:number[] = [];

  constructor() { 
    this.numberList = [1,2,3,4,5];
  }

  add(num1:number, num2:number){
    return num1 + num2;
  }

  insert(num:number){
    this.numberList.push(num);
    return this.numberList;
  }

  remove(){
    this.numberList.pop();
    return this.numberList;
  }

}
