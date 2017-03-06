import {Component, ViewEncapsulation, OnInit} from '@angular/core'
import {EventService} from './shared/event.service'
import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'events-list',
    templateUrl: './app/events/events-list.html',
    styles: [
        `.well div {
            color:red;
        }`
    ],
    encapsulation: ViewEncapsulation.None
})
export class EventsListComponent implements OnInit{
  events:any

constructor (private eventService:EventService, private route: ActivatedRoute){

}
ngOnInit(){
    this.events = this.route.snapshot.data['events']
}

    // thumbnail
    eventClickMe(thumbnail){
       thumbnail.logFoo();
    }
}