interface Person{

    name:string;
    id:number
}
enum Roles {
    ADMIN, USER
}



class User implements Person{

name:string;
id:number
role:Roles
constructor(name:string, id:number, role:Roles){
    this.name = name;
    this.id = id
    this.role = role

    
}


printRole(): void{
    console.log(`${Roles[this.role]} : This is user with name of ${this.name} and ${this.id}`)

}
}


class Admin implements Person{

    name:string;
    id:number;
    role:Roles

    constructor(name:string, id:number, role:Roles){
        this.name = name;
        this.id = id;
        this.role = role

    }

    printRole():void{
        console.log(`${Roles[this.role]} : This is user with name of ${this.name} and ${this.id}`)
    }
}



class CreateUser {

    static createUser(name: string, id:number, role: Roles){

        if(Roles[role] == 'ADMIN'){
            return new Admin(name, id, role)
        }
        else if(Roles[role] == 'USER'){
            return new User(name, id, role)

        }else{
            console.log('No Class Found !!!!')
        }
    }

}

let createUser = CreateUser.createUser('Arun', 123, Roles.USER)
createUser.printRole()

let createAdmin = CreateUser.createUser('Prathap', 456, Roles.ADMIN)
createAdmin.printRole()