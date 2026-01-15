import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail implements OnInit {
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.projectService.getProjectById(id).subscribe(data => {
        this.project = data;
      });
    }
  }

  generatePaymentSlip(): void {
    this.router.navigate(['/financials/payment-slip'], { queryParams: { projectId: this.project?.id } });
  }

  generateInvoice(): void {
    this.router.navigate(['/financials/invoice'], { queryParams: { projectId: this.project?.id } });
  }
}
