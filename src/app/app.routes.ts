import { Routes } from '@angular/router';
import { Home } from './components/router/home/home';
import { ProductLaunch } from './components/router/product-launch/product-launch';
import { Carrers } from './components/router/carrers/carrers';
import { ContactUs } from './components/router/contact-us/contact-us';

export const routes: Routes = [
    {path:'home',component:Home},
    {path:'productlaunch',component:ProductLaunch},
    {path:'careers',component:Carrers},
    {path:'contactus',component:ContactUs},
    //{path:'',component:},
    { path: '**', component: Home },


];