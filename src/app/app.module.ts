import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth-guard/auth-guard.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";




const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'  },
  { path: 'post-list', component: PostListComponent},
  { path: 'post-add', component: PostEditComponent, },
  { path: 'authentication', component: AuthComponent },
  { path: 'post-edit/:index', component: PostEditComponent,  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    PostComponent,
    PostListComponent,
    PostEditComponent,
    LoginComponent,
    RegisterComponent,
    
  
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDy7atW1aEoUIluLqOsbbGlzYorauZTEaU",
  authDomain: "zunigaproject-84a6e.firebaseapp.com",
  databaseURL: "https://zunigaproject-84a6e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "zunigaproject-84a6e",
  storageBucket: "zunigaproject-84a6e.appspot.com",
  messagingSenderId: "736922745933",
  appId: "1:736922745933:web:fc2cb4f8664c39a1a57004"
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }