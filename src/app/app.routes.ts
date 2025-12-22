import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './services/auth.guard';
import { PgOneComponent } from './components/pg-one/pg-one.component';
import { PgTwoComponent } from './components/pg-two/pg-two.component';
import { PgThreeComponent } from './components/pg-three/pg-three.component';
import { PgFourComponent } from './components/pg-four/pg-four.component';
import { PgFiveComponent } from './components/pg-five/pg-five.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo: 'login' ,
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent ,
    },
    {
        path:'',
        component:LayoutComponent ,
        children:[

            {
        path:'master',
        component:MasterComponent ,
        canActivate:[authGuard]
    },
    {
        path:'employee',
        component:EmployeeComponent ,
        canActivate:[authGuard]
    },
    {
        path:'client',
        component:ClientComponent ,
        canActivate:[authGuard]
    },
    {
        path:'client-project',
        component:ClientProjectComponent ,
        canActivate:[authGuard]
    }

        ]
    },
    {
        path:'pgOne',
        component:PgOneComponent ,
    },
    {
        path:'pgTwo',
        component:PgTwoComponent ,
    },
    {
        path:'pgThree',
        component:PgThreeComponent ,
    },
    {
        path:'pgFour',
        component:PgFourComponent ,
    },
    {
        path:'pgFive',
        component:PgFiveComponent ,
    }
        
    
];
