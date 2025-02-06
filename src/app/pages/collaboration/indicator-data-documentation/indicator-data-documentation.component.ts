import { Component } from '@angular/core';
import { UiSwitchModule } from "ngx-ui-switch";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-indicator-data-documentation',
  standalone: true,
  imports: [
    UiSwitchModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './indicator-data-documentation.component.html',
  styleUrl: './indicator-data-documentation.component.scss'
})
export class IndicatorDataDocumentationComponent {
  showForm: boolean = true;
  department: string = '';
  topic: string = '';
  selectedValue: string = '';

  showThankYouMessage: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with validation rules
    this.form = this.fb.group({
      department: ['', Validators.required],
      topic: ['', Validators.required],
      selectedValue: ['', Validators.required],
      definition: ['', Validators.required],
      calculation: ['', Validators.required],
      unitOfMeasurement: ['', Validators.required],
      frequency: ['', Validators.required]
    });

  }

  // Method to handle form submission
  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.showForm = false;
      this.showThankYouMessage = true;
      this.form.reset();
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}