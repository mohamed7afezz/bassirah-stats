import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UiSwitchModule } from "ngx-ui-switch";
import { NgClass } from "@angular/common";
import { CommonModule } from "@angular/common"; // ✅ Import CommonModule
import { NgForm, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-create-workflow",
  standalone: true,
  imports: [
    NgClass,
    UiSwitchModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./create-workflow.component.html",
  styleUrl: "./create-workflow.component.scss",
})
export class CreateWorkflowComponent {
  showForm: boolean = true;
  showThankYouMessage: boolean = false;
  nextStepId: number = 1; // Counter for Step IDs
  steps: { stepName: string; selectedStep: string }[] = [];

  constructor() {
    this.addStep(); // Initialize with one step
  }

  // Handle form submission
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Handle form submission
      console.log("Form Submitted", this.steps);
      this.showForm = false;
      this.showThankYouMessage = true;
    } else {
      // Handle form errors
      console.log("Form is invalid");
    }
  }

  // Remove a step by index
  removeStep(index: number) {
    if (this.steps.length > 1) {
      // Ensure at least one step remains
      this.steps.splice(index, 1);
    }
  }

  addStep() {
    if (this.steps.length < 10) {
      this.steps.push({ stepName: "", selectedStep: "" });
    }
  }
}
