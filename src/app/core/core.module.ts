import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './presentation/nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule  ],
  exports: [NavBarComponent],
})
export class CoreModule {}
