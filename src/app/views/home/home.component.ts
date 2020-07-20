import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotasFormComponent } from './notas-form/notas-form.component';
import { Nota } from 'src/app/shared/model/nota.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void { }
  
  adicionarNota(): void { 
    const dialogRef = this.dialog.open(NotasFormComponent, { 
      data: { nota: null } });
  }
}
