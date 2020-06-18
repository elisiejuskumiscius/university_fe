import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversityListComponent } from './components/university-list/university-list.component';
import { UniversityComponent } from './components/university/university.component';
import { StudyProgramListComponent } from './components/study-program-list/study-program-list.component';
import { UniversityModalComponent } from './components/university-modal/university-modal.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';
import { PanelComponent } from './shared/panel/panel.component';
import { ListHeaderComponent } from './shared/list-header/list-header.component';
import { ListItemComponent } from './shared/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversityListComponent,
    UniversityComponent,
    StudyProgramListComponent,
    UniversityModalComponent,
    LoginComponent,
    PageTitleComponent,
    PanelComponent,
    ListHeaderComponent,
    ListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
