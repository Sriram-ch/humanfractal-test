import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

interface DateTime {
  date: string,
  time: string
}

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  @Input('data') data = {};
  @Output() selectedDateandTime: EventEmitter<DateTime> = new EventEmitter();

  enabledDates = [];
  slotsSection: boolean = false;
  selectedDate: string = '';
  slots: [] = [];

  constructor() { }

  ngOnInit() {
    for (var i = 0; i < this.data['slots'].length; i++) {
      const item = this.data['slots'][i];
      const formatChanged = this.convertDate(item.date);
      this.data['slots'][i]['newFormattedDate'] = formatChanged;
      this.enabledDates.push(new Date(formatChanged));
    }
  }

  // To convert date format received from JSON as 10-May-2021 to 2021-05-10
  convertDate(d) {
    var parts = d.split("-");
    var months = { January: "01", February: "02", March: "03", April: "04", May: "05", June: "06", July: "07", August: "08", September: "09", October: "10", November: "11", December: "12" };
    return parts[2] + "-" + months[parts[1]] + "-" + parts[0];
  }

  //Called when a date is selected on datePicker
  onValueChange(e) {
    this.slotsSection = true;
    var parts = e.toString().split(" ");
    this.selectedDate = parts[1] + ' ' + parts[2] + ' ' + parts[3];
    var months = { Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06", Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12" };
    var checkDate = parts[3] + '-' + months[parts[1]] + '-' + parts[2];
    for (var i = 0; i < this.data['slots'].length; i++) {
      const item = this.data['slots'][i];
      if (item.newFormattedDate == checkDate) {
        this.slots = item.timeSlots
      }
    }
  }

  //Called when time slot is selected and emits output to parent component 
  timeSelected(event) {
    this.selectedDateandTime.emit({ "date": this.selectedDate, "time": event })
  }

}
