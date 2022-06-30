import { NgModule } from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatProgressBarModule} from "@angular/material/progress-bar";



@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatProgressBarModule
  ],
  exports : [
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
