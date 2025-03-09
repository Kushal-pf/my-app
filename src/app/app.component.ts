import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common'
import { AppointmentListComponent } from "./appointment-list/appointment-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AppointmentListComponent,NgOptimizedImage]
})
export class AppComponent {
  title = 'kg_codex';
}
