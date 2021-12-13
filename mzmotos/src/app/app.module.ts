import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AgendaCardComponent } from './components/agenda-card/agenda-card.component';
import { ClockComponent } from './components/clock/clock.component';
import { CatalogueItemComponent } from './components/catalogue-item/catalogue-item.component';
import { FloatButtonComponent } from './components/float-button/float-button.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AgreementComponent } from './components/agreement/agreement.component';
import { SearchComponent } from './components/search/search.component';
import { NotifyComponent } from './components/notify/notify.component';
import { ClientproductComponent } from './components/clientproduct/clientproduct.component';
import { ClientsComponent } from './components/clients/clients.component';

//Pages
import { LoginComponent } from './pages/login/login.component';
import { SalesmanComponent } from './pages/salesman/salesman.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';

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
    FloatButtonComponent,
    AppointmentFormComponent,
    AgreementComponent,
    SearchComponent,
    NotifyComponent,
    ClientproductComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
