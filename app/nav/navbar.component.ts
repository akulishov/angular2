import {Component} from '@angular/core'

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .navbar-nav {
            font-size: 15px;
            }
        #searchForm {margin-right: 100px}    
        li > a.active {color: #F97924}
        `
    ]

})
export class NavBarComponent{
    
}