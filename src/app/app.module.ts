import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ServiceModule } from './views/service/service.module';
import { AuthModule } from './views/auth/auth.module';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { GlobalRegistryService } from './core/services/global-registry.service';
import { CoreServices } from './core/core.services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ServiceModule,
    AuthModule,
    DashboardModule,
    CoreServices
  ],
  providers: [GlobalRegistryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
