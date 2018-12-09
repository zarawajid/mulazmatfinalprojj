import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { PostjobComponent } from './postjob/postjob.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ViewjobsComponent } from './viewjobs/viewjobs.component';
import { UpdatejobComponent } from './updatejob/updatejob.component';
import { MapComponent } from './map/map.component';
import { CreatecvComponent } from './createcv/createcv.component';
import { ViewcvComponent } from './viewcv/viewcv.component';


@NgModule({
  declarations: [
    AppComponent,
    ApplyjobComponent,
    PostjobComponent,
    RecommendationsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ViewjobsComponent,
    UpdatejobComponent,
    MapComponent,
    CreatecvComponent,
    ViewcvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
