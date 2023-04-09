import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Chart,  registerables } from 'node_modules/chart.js';
import { AccountService } from 'src/app/services/account/account.service';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { DashboardCount } from '../../Models/dashboard-model';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.css']
})
export class DashboardChartComponent  {
 
  }
