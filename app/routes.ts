import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details.component'
import { EventCreateComponent } from './events/event-create.component'
import { EventRouteActivator } from './events/event-route-activator.service'
import { } from './events/event-create.component'
import { Error404Component } from './errors/error404.component'
import { EventListResolver } from './events/event-list-resolver.service'

export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/new', component: EventCreateComponent, canDeactivate: ['canDeactivateCreate'] },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren:'app/user/user.module#UserModule'}
]