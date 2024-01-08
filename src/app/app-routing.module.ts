import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PanelComponent } from './pages/panel/panel.component';
import { UserManagerComponent } from './pages/user-manager/user-manager.component';
import { User } from './models/User';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { ChatComponent } from './pages/chat/chat.component';

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'panel',component:PanelComponent},
  {path:'manager',component:UserManagerComponent},
  {path:'stdRegistry/:numRegistros',component:UserRegisterComponent},
  {path:'chat',component:ChatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}

