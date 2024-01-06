import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public userKey:string="logedUser";

  constructor() { }

  public setUser(user:any):void{
    localStorage.setItem(this.userKey,JSON.stringify(user));
  }

  public getUser():any{
    const userString = localStorage.getItem(this.userKey);
    return userString ? JSON.parse(userString) : null;
  }

  public clearUser():void{
    localStorage.removeItem(this.userKey);
  }


}
