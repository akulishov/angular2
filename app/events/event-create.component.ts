import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
    templateUrl: 'app/events/event-create.html'
})
export class EventCreateComponent{
    isDirty:boolean = true;
    constructor(private router:Router){

    }
    cancel(){
        this.router.navigate(['/events']);
    }
}