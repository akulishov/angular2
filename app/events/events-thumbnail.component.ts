import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: "event-thumbnail",
    template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2 [ngClass]='getTitleClass(event.format)'>{{event.name}}</h2>
            <div style="color: grey">Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: \${{event.price}}</div>
        </div>
        `,
    styles: [
        `.well.hovewell {
        min-heght: 200px;
    }`
    ]
})
export class EventThumbnailComponent {
    @Input() event: any
    @Output() eventClick = new EventEmitter();
    someProperty: String = 'some prop';
    logFoo() {
        console.log('foo');

    }
    getTitleClass(format) {
        switch (format) {
            case 'OnLine': {
                return 'online';
            }
            case 'InPerson': {
                return 'in-person'
            }  
            default:
                return 'tbd'
        }
    }
}