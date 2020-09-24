import { Component, OnInit } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  faFilter = faFilter;

  constructor() { }

  ngOnInit(): void {
  }

}
