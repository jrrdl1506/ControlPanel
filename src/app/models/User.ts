export class User{
    id:string;
    userType:string;
    username:string;
    password:string;

    constructor(id:string,username:string,password:string,userType:string){
        this.id = id;
        this.userType = userType;
        this.username = username;
        this.password = password;

    }

}