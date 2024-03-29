import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { PanelComponent } from './pages/panel/panel.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UserManagerComponent } from './pages/user-manager/user-manager.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { ScholarFormComponent } from './components/scholar-form/scholar-form.component';
import { ChatComponent } from './pages/chat/chat.component';
import { StudentReportComponent } from './pages/student-report/student-report.component';
import { MedicalReportComponent } from './pages/medical-report/medical-report.component';
import { UserModifyComponent } from './pages/user-modify/user-modify.component';
import { BulletinBoardComponent } from './pages/bulletin-board/bulletin-board.component';
import { BulletinReportComponent } from './components/bulletin-report/bulletin-report.component';
import { ViewReportComponent } from './pages/view-report/view-report.component';
import { ReportListComponent } from './pages/report-list/report-list.component';
import { ReportComponent } from './components/report/report.component';
import { ViewExpedienteComponent } from './pages/view-expediente/view-expediente.component';
import { BehaviorReportComponent } from './pages/behavior-report/behavior-report.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PanelComponent,
    LoginFormComponent,
    ToolbarComponent,
    UserManagerComponent,
    UserRegisterComponent,
    ScholarFormComponent,
    ChatComponent,
    StudentReportComponent,
    MedicalReportComponent,
    UserModifyComponent,
    BulletinBoardComponent,
    BulletinReportComponent,
    ViewReportComponent,
    ReportListComponent,
    ReportComponent,
    ViewExpedienteComponent,
    BehaviorReportComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
