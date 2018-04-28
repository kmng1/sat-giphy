import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexLayoutModule} from '@angular/flex-layout';

const MATERIAL = [
  FlexLayoutModule,
  MatToolbarModule, MatInputModule,
  MatFormFieldModule, MatButtonModule,
  MatIconModule, MatCardModule
];

@NgModule({
  imports: MATERIAL,
  exports: MATERIAL
})
export class MaterialModule { }
