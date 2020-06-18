import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-university-modal',
  templateUrl: './university-modal.component.html',
  styleUrls: ['./university-modal.component.css']
})
export class UniversityModalComponent implements OnInit {

  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<UniversityModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: University
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      code: new FormControl(this.data.code, [
        Validators.required,
        Validators.minLength(2)
      ]),
      title: new FormControl(this.data.title, [
        Validators.required
      ])
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close({...this.data, ...this.form.getRawValue()});
  }

  get code() {
    return this.form.get('code');
  }

  get title() {
    return this.form.get('title');
  }
}
