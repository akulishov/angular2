import {Routes} from '@angular/router'
import {ProfileComponent, UserLogin} from './index'

export const userRoutes: Routes = [
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: UserLogin}
]