import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class SidepanelComponent implements OnInit {

  menu = [
    {
      title: "Dashboard",
      icon: "fa-pie-chart",
      isActive: false
    },
    {
      title: "Site Details",
      icon: "fa-book",
      isActive: true
    },
    {
      title: "Migrations",
      icon: "fa-database",
      isActive: false
    },
    {
      title: "Backups",
      icon: "fa-folder-open",
      isActive: false
    },
    {
      title: "Collaborators",
      icon: "fa-users",
      isActive: false
    },
    {
      title: "Support Tickets",
      icon: "fa-clone",
      isActive: false
    },
    {
      title: "Open New Ticket",
      icon: "fa-user-plus",
      isActive: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
