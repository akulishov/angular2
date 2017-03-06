"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var user_routes_1 = require("./user.routes");
var index_1 = require("./index");
var forms_1 = require("@angular/forms");
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forChild(user_routes_1.userRoutes)
        ],
        declarations: [
            index_1.ProfileComponent,
            index_1.UserLogin
        ],
        providers: []
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map