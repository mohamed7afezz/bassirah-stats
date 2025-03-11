import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { NgForm , ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from "ngx-ui-switch";

@Component({
  selector: 'app-create-approve-cycle',
  standalone: true,
    imports: [
        NgClass,
        UiSwitchModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './create-approve-cycle.component.html',
  styleUrl: './create-approve-cycle.component.scss'
})
export class CreateApproveCycleComponent {
    showForm: boolean = true;
    selectedValueWF: string = '';
    showThankYouMessageWF: boolean = false;
    nextReviewerId: number = 1; // Counter for reviewer IDs
    reviewers: { id: number; label: string; selectedReviewer: string }[] = [];


    constructor() {
        if (this.reviewers.length == 0){
            this.addReviewer();
        }
    }

  onSubmit(form: NgForm) {
    form.form.markAllAsTouched();
    if (form.valid) {
        this.showForm = false;
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

  resetForm(form: NgForm) {
    form.resetForm(); // Reset the form

      this.selectedValueWF = '';
      this.reviewers = []; // Clear the reviewers array
      this.nextReviewerId = 1; // Reset the reviewer ID counter
  }
}
