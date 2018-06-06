import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from "../pages/tabs/tabs";
import { AdminPage } from "../pages/admin/admin";
import { UserPage } from "../pages/user/user";
import { LoginadminPage } from "../pages/loginadmin/loginadmin";
import { LoginuserPage } from "../pages/loginuser/loginuser";
import { AdminServiceProvider } from '../providers/admin-service/admin-service';
import { HttpModule } from "@angular/http";
import { UserServiceProvider } from '../providers/user-service/user-service';
import { MeterServiceProvider } from '../providers/meter-service/meter-service';
import { AddmeterServiceProvider } from '../providers/addmeter-service/addmeter-service';
import { ChoicePage } from "../pages/choice/choice";
import { PaymentPage } from "../pages/payment/payment";
import { PaymentServiceProvider } from '../providers/payment-service/payment-service';
import { PaymentaddServiceProvider } from '../providers/paymentadd-service/paymentadd-service';
import { UserpPage } from "../pages/userp/userp";
import { UsermPage } from "../pages/userm/userm";
import { ProblemServiceProvider } from '../providers/problem-service/problem-service';
import { StatusServiceProvider } from '../providers/status-service/status-service';
import { StatusPage } from "../pages/status/status";
import { AdminpPage } from "../pages/adminp/adminp";
import { AdminpServiceProvider } from '../providers/adminp-service/adminp-service';
import { NextpServiceProvider } from '../providers/nextp-service/nextp-service';
import { AddmeterpServiceProvider } from '../providers/addmeterp-service/addmeterp-service';
import { OfflinePage } from "../pages/offline/offline";
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { SavemServiceProvider } from '../providers/savem-service/savem-service';
import { HomePageModule } from '../pages/home/home.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { UserPageModule } from '../pages/user/user.module';
import { AdminPageModule } from '../pages/admin/admin.module';
import { LoginadminPageModule } from '../pages/loginadmin/loginadmin.module';
import { ChoicePageModule } from '../pages/choice/choice.module';
import { LoginuserPageModule } from '../pages/loginuser/loginuser.module';
import { PaymentPageModule } from '../pages/payment/payment.module';
import { UserpPageModule } from '../pages/userp/userp.module';
import { UsermPageModule } from '../pages/userm/userm.module';
import { StatusPageModule } from '../pages/status/status.module';
import { AdminpPageModule } from '../pages/adminp/adminp.module';
import { OfflinePageModule } from '../pages/offline/offline.module';
import { Ipv4ServiceProvider } from '../providers/ipv4-service/ipv4-service';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    HomePageModule,
    TabsPageModule,
    AdminPageModule,
    UserPageModule,
    LoginadminPageModule,
    LoginuserPageModule,
    ChoicePageModule,
    PaymentPageModule,
    UserpPageModule,
    UsermPageModule,
    StatusPageModule,
    AdminpPageModule,
    OfflinePageModule,
    ChartsModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdminServiceProvider,
    UserServiceProvider,
    MeterServiceProvider,
    AddmeterServiceProvider,
    PaymentServiceProvider,
    PaymentaddServiceProvider,
    ProblemServiceProvider,
    StatusServiceProvider,
    AdminpServiceProvider,
    NextpServiceProvider,
    AddmeterpServiceProvider,
    SavemServiceProvider,
    Ipv4ServiceProvider,
  ]
})
export class AppModule {}
