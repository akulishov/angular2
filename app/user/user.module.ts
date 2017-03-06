import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {NgModule} from '@angular/core'
import {userRoutes} from './user.routes'
import {ProfileComponent, UserLogin} from './index'
import {FormsModule} from '@angular/forms'

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations:[
        ProfileComponent,
        UserLogin
    ],
    providers:[

    ]

})
export class UserModule{

}