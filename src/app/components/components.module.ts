import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaComponent } from './vista/vista.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    VistaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    ButtonModule
  ],
  exports:[
    VistaComponent
  ]
})
export class ComponentsModule { }
