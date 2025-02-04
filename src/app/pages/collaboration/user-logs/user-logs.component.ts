import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import { UiSwitchModule } from "ngx-ui-switch";
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import {FormsModule, FormBuilder, FormGroup, NgForm , Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-logs',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        NgClass,
        UiSwitchModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './user-logs.component.html',
  styleUrl: './user-logs.component.scss'
})
export class UserLogsComponent {
    showThankYouMessage: boolean = false;
    showForm: boolean = true;
    form: FormGroup;
    User_Name: string = '';


    constructor(private fb: FormBuilder) {
        // Initialize the form with validation rules
        this.form = this.fb.group({
          UserName: ['', Validators.required],
          LogsFrom: ['', Validators.required],
          LogsTo: ['', Validators.required],
        });
    }
    // Method to handle form submission
    onSubmit() {
        // Mark all fields as touched to trigger validation messages
        this.form.markAllAsTouched();

        // Check if the form is valid
        if (this.form.valid) {
            // Show the "Thank You" message
            this.showThankYouMessage = true;
            this.User_Name = this.form.get('UserName')?.value;
            // Hide the for
            this.showForm = false;
            this.form.reset();
        } else {
            console.log('Form is invalid. Please check the fields.');
        }
  }
}
