import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PanelComponent } from './pages/panel/panel.component';
import { UserManagerComponent } from './pages/user-manager/user-manager.component';
import { User } from './models/User';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { ChatComponent } from './pages/chat/chat.component';
import { StudentReportComponent } from './pages/student-report/student-report.component';
import { MedicalReportComponent } from './pages/medical-report/medical-report.component';
import { UserModifyComponent } from './pages/user-modify/user-modify.component';
import { BulletinBoardComponent } from './pages/bulletin-board/bulletin-board.component';
import { ViewReportComponent } from './pages/view-report/view-report.component';
import { ReportListComponent } from './pages/report-list/report-list.component';
import { ReportComponent } from './components/report/report.component';
import { ViewExpedienteComponent } from './pages/view-expediente/view-expediente.component';
import { BehaviorReportComponent } from './pages/behavior-report/behavior-report.component';


const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'panel',component:PanelComponent},
  {path:'manager',component:UserManagerComponent},
  {path:'stdRegistry/:numRegistros',component:UserRegisterComponent},
  {path:'chat',component:ChatComponent},
  {path:'stdReport',component:StudentReportComponent},
  {path:'mdReport',component:MedicalReportComponent},
  {path:'editUser',component:UserModifyComponent},
  {path:'bulletinBoard',component:BulletinBoardComponent},
  {path:'viewReport',component:ViewReportComponent},
  {path:'viewReport/:type?',component:ViewReportComponent},
  {path:'reportList/:report',component:ReportListComponent},
  {path:'viewExp',component:ViewExpedienteComponent},
  {path:'behaviorReport',component:BehaviorReportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}

