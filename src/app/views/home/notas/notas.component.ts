import { Component, OnInit } from '@angular/core';
import { NotaService } from 'src/app/shared/service/nota.service';
import { Nota } from 'src/app/shared/model/nota.model';
import { MatDialog } from '@angular/material/dialog';
import { NotasFormComponent } from '../notas-form/notas-form.component';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})

export class NotasComponent implements OnInit {

  notas: Nota[];
  notasImportantes: Nota[] = [];
  notasPessoais: Nota[] = [];
  notasComuns: Nota[] = [];
  
  constructor(
    public notaService: NotaService, 
    public dialog: MatDialog
  ) { }
  
  ngOnInit(): void {
    this.getNotas();
  }

  marcandoNotas() {
    this.notas.forEach(nota => {
      if (nota.marcador == "importante") {
        this.notasImportantes.push(nota);
      } else if (nota.marcador == "pessoal") {
        this.notasPessoais.push(nota);
      } else {
        this.notasComuns.push(nota);
      }
    })
  }

  getNotas() {
    this.notaService.getNotas().subscribe(data => {
      this.notas = data;
      this.marcandoNotas();
    });
  }

  editarNota(id): void { 
    this.notas.forEach(nota => {
      if (nota.id == id) {
        const dialogRef = this.dialog.open(NotasFormComponent,
          { data : {nota} } );
      }
    });
  }

}
