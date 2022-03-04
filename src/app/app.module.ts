import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { FooterComponent } from './views/footer/footer.component';
import { BannerComponent } from './views/banner/banner.component';
import { PcgamesComponent } from './views/pcgames/pcgames.component';
import { GaleriaComponent } from './views/galeria/galeria.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { NotFoundComponent } from './views/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    JogosComponent,
    FooterComponent,
    BannerComponent,
    PcgamesComponent,
    GaleriaComponent,
    LoginComponent,
    CadastroComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
  
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
