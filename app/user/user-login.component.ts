import { Component } from '@angular/core'

@Component({
    templateUrl: "app/user/user-login.component.html"
})
export class UserLogin {
    login(values) {
        console.log(values)
    }

}