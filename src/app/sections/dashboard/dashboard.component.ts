import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public doughnutChartLabels: String[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: Number[] = [350, 450, 100];
  public doughnutChartType: String = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
