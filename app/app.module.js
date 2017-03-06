"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var events_app_component_1 = require("./events-app.component");
var events_list_component_1 = require("./events/events-list.component");
var events_thumbnail_component_1 = require("./events/events-thumbnail.component");
var event_details_component_1 = require("./events/event-details.component");
var event_create_component_1 = require("./events/event-create.component");
var event_route_activator_service_1 = require("./events/event-route-activator.service");
var error404_component_1 = require("./errors/error404.component");
var navbar_component_1 = require("./nav/navbar.component");
var index_1 = require("./events/shared/index");
var router_1 = require("@angular/router");
var routes_1 = require("./routes");
var event_list_resolver_service_1 = require("./events/event-list-resolver.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes)],
        declarations: [events_app_component_1.EventsAppComponent,
            events_list_component_1.EventsListComponent,
            events_thumbnail_component_1.EventThumbnailComponent,
            event_details_component_1.EventDetailsComponent,
            navbar_component_1.NavBarComponent,
            event_create_component_1.EventCreateComponent,
            error404_component_1.Error404Component],
        providers: [
            index_1.EventService,
            event_route_activator_service_1.EventRouteActivator,
            event_list_resolver_service_1.EventListResolver,
            {
                provide: 'canDeactivateCreate', useValue: checkIsDirty
            }
        ],
        bootstrap: [events_app_component_1.EventsAppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
function checkIsDirty(component) {
    if (component.isDirty) {
        return window.confirm("You have unsaved information, Proceed?");
    }
    return true;
}
//# sourceMappingURL=app.module.js.map