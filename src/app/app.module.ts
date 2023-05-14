import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { UserModule} from './user/user.module'
import { AdminModule } from './admin/admin.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterception } from './shared/model/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    UserModule,
    HttpClientModule,
    AdminModule,
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterception,
    multi: true,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
