import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotasFormComponent } from './notas-form/notas-form.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  public busca: FormGroup;
  public valorBusca : String = '';

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void { 
    this.busca = this.fb.group({
      campoBusca: ['']
    })
  }
  
  adicionarNota(): void { 
    const dialogRef = this.dialog.open(NotasFormComponent, { 
      data: { nota: null } });
  }

  buscarNota(): void { 
    this.valorBusca = this.busca.value.campoBusca;
    this.busca.reset();
  }

}
