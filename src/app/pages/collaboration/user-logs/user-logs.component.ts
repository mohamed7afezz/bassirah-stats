import { Component } from '@angular/core';
import { NgClass, NgForOf, NgIf } from "@angular/common";
import { UiSwitchModule } from "ngx-ui-switch";
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { SimplebarAngularModule } from "simplebar-angular";

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
    ReactiveFormsModule,
    RouterLink,
    SimplebarAngularModule
  ],
  templateUrl: './user-logs.component.html',
  styleUrl: './user-logs.component.scss'
})
export class UserLogsComponent {
  showThankYouMessage: boolean = false;
  showForm: boolean = true;
  form: FormGroup;
  User_Name: string = '';
  activityItems: { activity: string, icon: string, classes: string, date: string }[] = []; // Array to store activity items with updated dates

  constructor(private fb: FormBuilder) {
    // Initialize the form with validation rules
    this.form = this.fb.group({
      UserName: ['', Validators.required],
      LogsFrom: ['', Validators.required],
      LogsTo: ['', Validators.required],
    });



    // Initialize activity items with placeholder dates
    this.activityItems = [
      { activity: 'Log In', icon: "ri-login-box-line", classes: "bg-success-subtle text-success", date: '02:14 PM Today' },
      { activity: 'Checking Messages', icon: "ri-stack-fill", classes: "bg-danger-subtle text-danger", date: '9:47 PM Yesterday' },
      { activity: 'Browsing Data Mart "GDP Indicator"', icon: "ri-global-line", classes: "bg-dark-subtle text-dark ", date: '9:47 PM Yesterday' },
      { activity: 'Connecting to Staging Database', icon: "ri-database-2-line", classes: "bg-info-subtle text-info ", date: '25 Nov, 2021' },
      { activity: 'Executing Query#3521 on tables "Consumption" & "Prices"', icon: "mdi mdi-sale fs-14", classes: "bg-secondary", date: '22 Oct, 2021' },
      { activity: 'Creating Data Model "Consumption"', icon: "ri-line-chart-line", classes: "bg-warning-subtle text-warning", date: '15 Oct' },
      { activity: 'Commenting on "Add API" Workflow Case#325', icon: "ri-links-fill", classes: "text-white bg-primary ", date: '22 Oct, 2021' },
      { activity: 'Publishing Dashboard "Price Index"',  icon: "ri-article-line", classes: "bg-warning ", date: '22 Oct, 2021' },
      { activity: 'Adding Indicator "Life Expectancy at Birth" to Watch List', icon: "ri-image-add-line", classes: "bg-success-subtle text-success", date: '22 Oct, 2021' },
      { activity: 'Log Out', icon: "ri-logout-box-line", classes: "bg-danger-subtle text-danger", date: '26 Aug, 2021' }
    ];
  }


    onSubmit() {
      this.form.markAllAsTouched();

      if (this.form.valid) {
        this.showThankYouMessage = true;
        this.User_Name = this.form.get('UserName')?.value;

        const logsFrom = new Date(this.form.get('LogsFrom')?.value);
        const logsTo = new Date(this.form.get('LogsTo')?.value);

        // Ensure Login is 12 hours after LogsFrom
        const loginDate = new Date(logsFrom.getTime() + 12 * 60 * 60 * 1000);

        // Ensure Logout is 12 hours before LogsTo
        const logoutDate = new Date(logsTo.getTime() - 12 * 60 * 60 * 1000);

        this.activityItems = this.activityItems.map((item, index) => {
          if (index === 0) {
            return { ...item, date: this.formatDate(loginDate) };
          } else if (index === this.activityItems.length - 1) {
            return { ...item, date: this.formatDate(logoutDate) };
          } else {
            return { ...item, date: this.getRandomDate(loginDate, logoutDate) };
          }
        });

        // Sort items based on date in ascending order
        this.activityItems.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        // Format the date to a readable string
        this.activityItems = this.activityItems.map(item => ({
          ...item,
          date: this.formatDate(new Date(item.date))
        }));

        this.showForm = false;
        this.form.reset();
      } else {
        console.log('Form is invalid. Please check the fields.');
      }
    }

  // Method to generate a random date between two dates
  getRandomDate(start: Date, end: Date): string {
    const randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    const randomDate = new Date(randomTimestamp);
    return this.formatDate(randomDate);
  }

  formatDate(date: Date): string {
    return date.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }
}