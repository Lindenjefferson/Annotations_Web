import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-notas-form',
  templateUrl: './notas-form.component.html',
  styleUrls: ['./notas-form.component.css']
})

export class NotasFormComponent implements OnInit {
  public notaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NotasFormComponent>,
    
  ) { }

  ngOnInit(): void {
    
  }

  cancel(): void { this.dialogRef.close(); }
  adicionar(): void { }
}
