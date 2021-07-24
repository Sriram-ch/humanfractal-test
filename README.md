# HumanfractalTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Development Setup

Run  `npm install` & `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Components 

I have created a Base Component with the selector `<app-base>` which holds the calender and takes Input json in the given format and emits the selected date and time slot.

## Modules used

To generate the datePicker which enables and disables specific dates I have used Bootstrap Datepicker since with HTML5 Date picker functionalites like these were limited.

## Application

The Base Component holds complete logic for Calender which can be used anywhere in the project with injecting its  instance `<app-base>`.Here the Base Component which is our child component is injected into `app.component.html` which acts as parent component. The Json data of all the available dates and slots is mentioned in `app.component.ts` which acts as input to `<app-base>`. The Output when the date and time slot is selected is catched at the parent component by the function name `displaySelected()` which then logs to console.






