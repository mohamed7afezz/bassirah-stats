import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgClass } from "@angular/common";
import { UiSwitchModule } from "ngx-ui-switch";
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { FormBuilder, FormGroup, NgForm , Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-indicator-data-documentation',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    UiSwitchModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './indicator-data-documentation.component.html',
  styleUrl: './indicator-data-documentation.component.scss'
})
export class IndicatorDataDocumentationComponent {
  showForm: string = "";
  selectedValue: string = ''; // Holds the selected option value
  selectedValueWF: string = '';
  showThankYouMessage: boolean = false; // Controls "Thank You" message visibility
  showThankYouMessageWF: boolean = false;
  form: FormGroup; // Form group for reactive form
  nextReviewerId: number = 1; // Counter for reviewer IDs
  reviewers: { id: number; label: string; selectedReviewer: string }[] = [];




  constructor(private fb: FormBuilder) {
    // Initialize the form with validation rules
    this.form = this.fb.group({
      selectedValue: ['', Validators.required], // Dropdown is required
      definition: ['', Validators.required], // Definition is required
      calculation: ['', Validators.required], // Calculation is required
      unitOfMeasurement: ['', Validators.required], // Unit of Measurement is required
      frequency: ['', Validators.required] // Frequency is required
    });

  }

  ShowForm(showForm: string) {
    this.showForm = showForm;
    this.showThankYouMessage = false;
    this.showThankYouMessageWF = false;
    this.selectedValue = '';
    this.selectedValueWF = '';
    if(showForm == "Approval-Cycle" && this.reviewers.length == 0){
      this.addReviewer();
    }
  }

  // Method to handle form submission
  onSubmit() {
    // Mark all fields as touched to trigger validation messages
    this.form.markAllAsTouched();

    // Check if the form is valid
    if (this.form.valid) {
      // Hide the form
      this.showForm = '';

      // Show the "Thank You" message
      this.showThankYouMessage = true;
      this.form.reset();
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

  // Method to handle form submission
  onSubmitWF(form: NgForm) {
    // Mark all fields as touched to trigger validation messages
    form.form.markAllAsTouched();
    if (form.valid) {
       // Hide the form
       this.showForm = '';
       this.showThankYouMessageWF = true;
       this.resetForm(form);
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

   // Method to add a new reviewer field
  addReviewer() {
    this.reviewers.push({
      id: this.nextReviewerId,
      label: `Add Reviewer ${this.nextReviewerId}`,
      selectedReviewer: '', // Initialize selected reviewer
    });
    this.nextReviewerId++; // Increment the counter for the next reviewer
  }

  // Method to reset the form
  resetForm(form: NgForm) {
    form.resetForm(); // Reset the form
    this.selectedValueWF = ''; // Reset the selected workflow
    this.reviewers = []; // Clear the reviewers array
    this.nextReviewerId = 1; // Reset the reviewer ID counter
  }
}