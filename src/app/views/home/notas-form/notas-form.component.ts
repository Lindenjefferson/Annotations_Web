import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
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
    private api: NotaService,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) { }

  ngOnInit(): void {
    this.verificar();
  }
  
  verificar() {
    if (this.data.nota == null) {
      this.criar(new Nota());
    } else {
      this.criar(this.data.nota);
    }
  }

  criar(nota : Nota) {
    this.notaForm = this.fb.group({
      id: [nota.id],
      titulo: [nota.titulo],
      conteudo: [nota.conteudo],
      marcador: [nota.marcador]
    })
  }

  adicionar(): void { 
    this.api.postNota(this.notaForm.value).subscribe(result => {});
    this.dialogRef.close(true);
    this.notaForm.reset;
    location.reload();
  }

  atualizar(): void {
    this.api.putNota(this.notaForm.value, this.notaForm.value.id).subscribe(result => { });
    this.dialogRef.close(true);
    this.notaForm.reset;
    location.reload();
  }

  deletar(): void {
    this.api.deleteNota(this.notaForm.value.id).subscribe(result => { 
      location.reload();
    });    
  }

}
