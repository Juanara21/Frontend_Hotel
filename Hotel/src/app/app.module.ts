import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HotelesComponent } from './componentes/hoteles/hoteles.component';
import { ReservasComponent } from './componentes/reservas/reservas.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { RegistrarHotelComponent } from './componentes/registrar-hotel/registrar-hotel.component';
import { HttpClientModule } from '@angular/common/http';

import { ReservaTableComponent } from './componentes/reserva-table/reserva-table.component';

const appRoutes: Routes = [
 
    { path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  // { path:'login',component:LoginComponent},  
  // { path:'signIn',component:SigninComponent},
    { path:'dashboard',component:SidenavComponent, children: [
      { path:'inicio',component:InicioComponent},
      { path:'hoteles',component:HotelesComponent},
      { path:'registrar',component:RegistrarComponent},
      { path:'registrarHotel',component:RegistrarHotelComponent},
      { path:'reservas',component:ReservasComponent},
      { path:'reservatable',component:ReservaTableComponent},
      
   ]},
  // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
  
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    FooterComponent,
    InicioComponent,
    HotelesComponent,
    ReservasComponent,
    RegistrarComponent,
    RegistrarHotelComponent,
    ReservaTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,

     
    }),
    MatSidenavModule,
    MatListModule,
    HttpClientModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
