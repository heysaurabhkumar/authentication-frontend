import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ViewAllTemplatesComponent } from './view-all-templates/view-all-templates.component';
import { ResumeTemplateComponent } from './resume-template/resume-template.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ResumeTemplateOneComponent } from './resume-template-one/resume-template-one.component';

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
