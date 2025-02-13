import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-vs-for',
  imports: [CommonModule],
  templateUrl: './ngfor-vs-for.component.html',
  styleUrl: './ngfor-vs-for.component.css'
})
export class NgforVsForComponent {
  employees: any[] = [
    { empName: 'John', empNumber: 101 , empEmail: 'john@gail.com', empDept: 'IT'},
    { empName: 'Bob', empNumber: 102 , empEmail: 'bob@gail.com', empDept: 'HR'},
    { empName: 'Peter', empNumber: 103 , empEmail: 'peter@gail.com', empDept: 'QA'},
  ]

  companyList: string[] = ['Atos', 'Capgemini', 'TCS', 'Infosys', 'Tech Mahindra', 'Google', 'Amazon'];

  // companyList: string[] = [];
}
