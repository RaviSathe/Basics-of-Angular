import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { TopNavComponent } from './myContainer/top-nav/top-nav.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { TemplateReferencevariableComponent } from './template-referencevariable/template-referencevariable.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ngx-bootstrap
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgifComponent } from './Directives/ngif/ngif.component';
import { PushSpliceComponent } from './Directives/push-splice/push-splice.component';
import { HomeComponent } from './nav/home/home.component';
import { AboutComponent } from './nav/about/about.component';
import { ContactComponent } from './nav/contact/contact.component';
import { ProductComponent } from './nav/product/product.component';
import { MainComponent } from './nav/main/main.component';
import { PageNotFoundComponent } from './nav/page-not-found/page-not-found.component';
import { CardComponent } from './ng-content/card/card.component';
import { ParentComponent } from './decorator/parent/parent.component';
import { ChildComponent } from './decorator/child/child.component'
import { MessageService } from './appService/message.service';
import { OneComponent } from './excercise/one/one.component';
import { Comp1Component } from './subject-behaviour/comp1/comp1.component';
import { Comp2Component } from './subject-behaviour/comp2/comp2.component';
import { Comp3Component } from './subject-behaviour/comp3/comp3.component';
import { Comp4Component } from './subject-behaviour/comp4/comp4.component';
import { PracticeComponent } from './subject-behaviour/practice/practice.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { TestDirectiveDirective } from './Directives/test-directive.directive';
import { FlexBoxComponent } from './css/flex-box/flex-box.component';
import { PHomeComponent } from './project/p-home/p-home.component';
import { PAboutComponent } from './project/p-about/p-about.component';
import { PGalleryComponent } from './project/p-gallery/p-gallery.component';
import { PProductComponent } from './project/p-product/p-product.component';
import { PContactComponent } from './project/p-contact/p-contact.component';
import { PLoginComponent } from './project/p-login/p-login.component';
import { PLandingPageComponent } from './project/p-landing-page/p-landing-page.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopNavComponent,
    HeaderComponent,
    DatabindingComponent,
    ClassStyleComponent,
    TemplateReferencevariableComponent,
    TwoWayDataBindingComponent,
    NgifComponent,
    PushSpliceComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    MainComponent,
    PageNotFoundComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    OneComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    PracticeComponent,
    ViewChildComponent,
    TestDirectiveDirective,
    FlexBoxComponent,
    PHomeComponent,
    PAboutComponent,
    PGalleryComponent,
    PProductComponent,
    PContactComponent,
    PLoginComponent,
    PLandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
