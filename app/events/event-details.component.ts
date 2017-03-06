import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: `app/events/event-details.html`,
    styles:[
        `.event-image {max-height: 100px}`
    ]
})
export class EventDetailsComponent implements OnInit {
    event: any;

    constructor(private eventService: EventService, private router:ActivatedRoute) {

    }

    ngOnInit() {
        this.event = this.eventService.getEventById(
            +this.router.snapshot.params['id']);
    }
}