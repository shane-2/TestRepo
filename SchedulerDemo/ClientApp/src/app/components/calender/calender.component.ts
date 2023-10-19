import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };
}
