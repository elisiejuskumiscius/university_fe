import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  private static readonly URL = '/api/universities/';

  university: University;
  selectedStudyProgramId: number;
  selectedStudyProgramModules: Module[];

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.api.get(UniversityComponent.URL + id).subscribe((data: University) => this.university = data);
  }

  removeStudyProgram(id: number) {
    this.university.studyPrograms = this.university.studyPrograms.filter(sp => sp.id !== id);
  }

  selectStudyProgram(id: number) {
    this.selectedStudyProgramId = id;
    const studyProgram = this.university.studyPrograms.find(sp => sp.id === id);
    this.selectedStudyProgramModules = this.university.modules.filter(m => studyProgram.modules.includes(m.id));
  }
}
