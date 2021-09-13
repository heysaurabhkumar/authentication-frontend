import { ResumeService } from './services/resume/resume.service';
import { TokenInterceptorService } from './services/auth/token-interceptor.service';
import { AuthService } from './services/auth/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth/auth.guard';
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';
import { ResumeFormComponent } from './components/resume/resume-form/resume-form.component';
import { ResumeTemplateComponent } from './components/resume/templates/resume-template/resume-template.component';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from 'angularx-social-login';
import { ResumeTemplateOneComponent } from './components/resume/templates/resume-template-one/resume-template-one.component';
import { ViewAllTemplatesComponent } from './components/resume/view-all-templates/view-all-templates.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    EditProfileComponent,
    ResumeFormComponent,
    ResumeTemplateComponent,
    ResumeTemplateOneComponent,
    ViewAllTemplatesComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '823617306530-0b264uv74c5jm32i3lmr9ipmii3hah72.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    ResumeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
