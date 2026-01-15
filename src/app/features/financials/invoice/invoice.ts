import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './invoice.html',
  styleUrl: './invoice.css',
})
export class Invoice implements OnInit {
  project: Project | undefined;
  invoiceId: string = '';
  date: Date = new Date();
  dueDate: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {
    this.dueDate.setDate(this.date.getDate() + 30); // Due in 30 days
  }

  ngOnInit(): void {
    const projectId = this.route.snapshot.queryParamMap.get('projectId');
    if (projectId) {
      this.projectService.getProjectById(projectId).subscribe(data => {
        this.project = data;
        this.invoiceId = `INV-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`;
      });
    }
  }

  print(): void {
    window.print();
  }
}
