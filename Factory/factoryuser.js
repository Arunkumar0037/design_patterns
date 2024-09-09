var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USER"] = 1] = "USER";
})(Roles || (Roles = {}));
var User = /** @class */ (function () {
    function User(name, id, role) {
        this.name = name;
        this.id = id;
        this.role = role;
    }
    User.prototype.printRole = function () {
        console.log("".concat(Roles[this.role], " : This is user with name of ").concat(this.name, " and ").concat(this.id));
    };
    return User;
}());
var Admin = /** @class */ (function () {
    function Admin(name, id, role) {
        this.name = name;
        this.id = id;
        this.role = role;
    }
    Admin.prototype.printRole = function () {
        console.log("".concat(Roles[this.role], " : This is user with name of ").concat(this.name, " and ").concat(this.id));
    };
    return Admin;
}());
var CreateUser = /** @class */ (function () {
    function CreateUser() {
    }
    CreateUser.createUser = function (name, id, role) {
        if (Roles[role] == 'ADMIN') {
            return new Admin(name, id, role);
        }
        else if (Roles[role] == 'USER') {
            return new User(name, id, role);
        }
        else {
            console.log('No Class Found !!!!');
        }
    };
    return CreateUser;
}());
var createUser = CreateUser.createUser('Arun', 123, Roles.USER);
createUser.printRole();
var createAdmin = CreateUser.createUser('Prathap', 456, Roles.ADMIN);
createAdmin.printRole();
