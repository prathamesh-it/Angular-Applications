import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FIRSTCOMPComponent } from './firstcomp/firstcomp.component';
import { SECONDCOMPComponent } from './secondcomp/secondcomp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FIRSTCOMPComponent,SECONDCOMPComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Homework1';
}
