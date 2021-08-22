import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { SalesmanComponent } from './components/salesman/salesman.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { ManagerComponent } from './components/manager/manager.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AgendaCardComponent } from './components/agenda-card/agenda-card.component';
import { ClockComponent } from './components/clock/clock.component';
import { CatalogueItemComponent } from './components/catalogue-item/catalogue-item.component';
import { FloatButtonComponent } from './components/float-button/float-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalesmanComponent,
    WarehouseComponent,
    ManagerComponent,
    NavbarComponent,
    AgendaComponent,
    CatalogueComponent,
    CalendarComponent,
    AgendaCardComponent,
    ClockComponent,
    CatalogueItemComponent,
    FloatButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }