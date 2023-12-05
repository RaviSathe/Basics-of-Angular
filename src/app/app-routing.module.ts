import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './nav/home/home.component';
import { AboutComponent } from './nav/about/about.component';
import { ContactComponent } from './nav/contact/contact.component';
import { ProductComponent } from './nav/product/product.component';
import { PageNotFoundComponent } from './nav/page-not-found/page-not-found.component';
import { ParentComponent } from './decorator/parent/parent.component';
import { OneComponent } from './excercise/one/one.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { FlexBoxComponent } from './css/flex-box/flex-box.component';
import { PHomeComponent } from './project/p-home/p-home.component';
import { PAboutComponent } from './project/p-about/p-about.component';
import { PContactComponent } from './project/p-contact/p-contact.component';
import { PGalleryComponent } from './project/p-gallery/p-gallery.component';
import { PLoginComponent } from './project/p-login/p-login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'product', component:ProductComponent},
  {path:'parent', component:ParentComponent},
  {path:'ex-1', component:OneComponent},
  {path:'child', component:ViewChildComponent},
  {path:'p-home', component:PHomeComponent},
  {path:'p-about', component:PAboutComponent},
  {path:'p-contact', component:PContactComponent},
  {path:'p-gallery', component:PGalleryComponent},
  {path:'p-login', component:PLoginComponent},
  // {path:'product', children:[
  //   {path:'', component:ProductComponent},
  //   {path:'data', component:PageNotFoundComponent}
  // ]},
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
