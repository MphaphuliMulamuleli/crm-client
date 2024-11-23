// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientManagementComponent } from './client-management/client-management.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        ClientManagementComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }