import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Nota } from 'src/app/shared/model/nota.model';
import { NotaService } from 'src/app/shared/service/nota.service';

@Component({
  selector: 'app-notas-form',
  templateUrl: './notas-form.component.html',
  styleUrls: ['./notas-form.component.css']
})

export class NotasFormComponent implements OnInit {
  public notaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NotasFormComponent>,
    private fb: FormBuilder,
    private api: NotaService
  ) { }

  ngOnInit(): void {
    this.createNota(new Nota())
   }

  createNota(nota : Nota) {
    this.notaForm = this.fb.group({
      titulo: [nota.titulo],
      conteudo: [nota.conteudo],
      marcador: [nota.marcador]
    })
  }

  cancel(): void { 
    this.dialogRef.close(); 
    this.notaForm.reset();
  }

  adicionar(): void { 
    this.api.postNota(this.notaForm.value).subscribe(result => {});
    this.dialogRef.close(true);
    this.notaForm.reset;
    location.reload();
  }
}
