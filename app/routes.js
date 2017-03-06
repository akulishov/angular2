"use strict";
var events_list_component_1 = require("./events/events-list.component");
var event_details_component_1 = require("./events/event-details.component");
var event_create_component_1 = require("./events/event-create.component");
var event_route_activator_service_1 = require("./events/event-route-activator.service");
var error404_component_1 = require("./errors/error404.component");
var event_list_resolver_service_1 = require("./events/event-list-resolver.service");
exports.appRoutes = [
    { path: 'events', component: events_list_component_1.EventsListComponent, resolve: { events: event_list_resolver_service_1.EventListResolver } },
    { path: 'events/new', component: event_create_component_1.EventCreateComponent, canDeactivate: ['canDeactivateCreate'] },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent, canActivate: [event_route_activator_service_1.EventRouteActivator] },
    { path: '404', component: error404_component_1.Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];
//# sourceMappingURL=routes.js.map