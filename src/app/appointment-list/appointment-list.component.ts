import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { Appointment } from '../model/appointment';
import { NgForOf, NgIf } from '@angular/common';
@Component({
  imports: [FormsModule,NgForOf,NgIf,DatePipe],
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {
  
    newAppointmentTitle: string = '';
    newAppointmentDate: Date = new Date();

     appointments: Appointment[] = [];
        
     ngOnInit(): void {
       let savedAppointments = localStorage.getItem('appointments');
       this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
    }

     addAppointment() {
        // alert(`Adding appointment ${this.newAppointmentTitle} on ${this.newAppointmentDate}`);
        if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
          let newAppointment:Appointment={
            id: Date.now(),
            title: this.newAppointmentTitle,
            date: this.newAppointmentDate
          }
          this.appointments.push(newAppointment);
          this.newAppointmentTitle = '';
          this.newAppointmentDate = new Date();
          localStorage.setItem('appointments', JSON.stringify(this.appointments));

          // alert('Appointment added successfully');
        }
     }

      removeAppointment(index: number) {
         this.appointments.splice(index, 1);
          localStorage.setItem('appointments', JSON.stringify(this.appointments));

      }

}
