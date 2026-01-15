import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-payment-slip',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './payment-slip.html',
  styleUrl: './payment-slip.css',
})
export class PaymentSlip implements OnInit {
  project: Project | undefined;
  slipId: string = '';
  date: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    const projectId = this.route.snapshot.queryParamMap.get('projectId');
    if (projectId) {
      this.projectService.getProjectById(projectId).subscribe(data => {
        this.project = data;
        this.slipId = `PS-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`;
      });
    }
  }

  print(): void {
    window.print();
  }
}
