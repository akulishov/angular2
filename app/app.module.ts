import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/events-thumbnail.component'
import { EventDetailsComponent } from './events/event-details.component'
import { EventCreateComponent } from './events/event-create.component'
import { EventRouteActivator } from './events/event-route-activator.service'
import { Error404Component } from './errors/error404.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './events/shared/index'
import { RouterModule } from '@angular/router'
import { appRoutes } from './routes'
import { EventListResolver } from './events/event-list-resolver.service'



@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        EventCreateComponent,
        Error404Component],
    providers: [
        EventService,
        EventRouteActivator,
        EventListResolver,
        {
            provide:'canDeactivateCreate', useValue: checkIsDirty
        }
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}

function checkIsDirty(component: EventCreateComponent){
   if (component.isDirty){
       return window.confirm("You have unsaved information, Proceed?")
   }
   return true;
}