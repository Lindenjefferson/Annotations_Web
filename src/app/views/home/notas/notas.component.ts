import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
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
  @Input() busca: String;
  
  constructor(
    public notaService: NotaService, 
    public dialog: MatDialog
  ) { }
  
  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.busca) {
      if (this.busca == '') this.getNotas();
      else this.buscaNotas();
    }
  }

  marcandoNotas() {
    this.notasComuns = [];
    this.notasPessoais = [];
    this.notasPessoais = [];
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

  buscaNotas() {
    this.notaService.buscaNota(this.busca).subscribe(data => {
      this.notas = data;
      this.marcandoNotas();
    });
  }

}
