import { CoreServices } from './core/core.services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ServiceModule } from './views/service/service.module';
import { AuthModule } from './views/auth/auth.module';

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
    CoreServices
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
