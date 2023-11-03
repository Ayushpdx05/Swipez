import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
// Import other modules as needed

@NgModule({
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    // Add other Angular Material modules here
  ],
})
export class MaterialModule {}
