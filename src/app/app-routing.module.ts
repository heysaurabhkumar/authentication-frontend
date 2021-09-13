import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { ViewAllTemplatesComponent } from './components/resume/view-all-templates/view-all-templates.component';
import { ResumeTemplateComponent } from './components/resume/templates/resume-template/resume-template.component';
import { ResumeFormComponent } from './components/resume/resume-form/resume-form.component';
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
import { ResumeTemplateOneComponent } from './components/resume/templates/resume-template-one/resume-template-one.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:id/:token', component: ResetPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'edit', component: EditProfileComponent, canActivate: [AuthGuard] },
  { path: 'resume', component: ResumeFormComponent, canActivate: [AuthGuard] },
  {
    path: 'template',
    component: ViewAllTemplatesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'template-one',
    component: ResumeTemplateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'template-two',
    component: ResumeTemplateOneComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
